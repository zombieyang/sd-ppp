// 创建一个esbuild脚本。
// 有三个entry，这些entry各自都会使用不同的编译配置
// 1. join(typescriptSrcRoot, './plugins/photoshop/entry.tsx')
// 2. join(typescriptSrcRoot, './plugins/photoshop/librarys.mts'),
// 3. join(typescriptSrcRoot, './plugins/photoshop-internal/entry.tsx')
// 4. join(typescriptSrcRoot, './sdsystem/comfy/comfy-entry.mts')
// 某个entry不存在时，不进行编译
// 采用context，能够watch typescripts目录下所有文件的变动
// 能够启动一个websocket服务，在每次编译完成后通知所有client

import * as esbuild from 'esbuild';
import WebSocket, { WebSocketServer } from 'ws';
import { join } from 'path';
import { typescriptSrcRoot } from './lib.ts';
import { globSync } from 'glob';
// 创建WebSocket服务器
const wss = new WebSocketServer({ port: 8787 });
const clients = new Set<WebSocket>();

wss.on('connection', (ws) => {
  clients.add(ws);
  console.log('Client connected, total clients:', clients.size);

  ws.on('close', () => {
    clients.delete(ws);
    console.log('Client disconnected, total clients:', clients.size);
  });
});

// 向所有客户端发送编译完成通知
function notifyClients(result: {
  errors: any[],
  warnings: any[]
}) {
  const message = JSON.stringify({
    type: 'build-complete',
    timestamp: new Date().toISOString(),
    errors: result.errors.length,
    warnings: result.warnings.length
  });

  for (const client of clients) {
    if (client.readyState === 1) { // OPEN
      client.send(message);
    }
  }
}

async function createBuildContexts() {
  const contexts = [];
  const startTime = Date.now();
  const isWatchMode = process.argv.includes('--watch');
  
  const buildConfigs = await Promise.all(
    globSync(join(typescriptSrcRoot, 'modules/*'))
      .map(async (path: string) => {
        const config = await import(join(path, 'esbuild.ts'))
        return {
          config: config.config,
          name: path.split('/').pop()
        }
      })
  )

  for (const config of buildConfigs) {
    console.log(`Creating build context for ${config.name}...`);
    try {
      // Replace inline plugin addition with function call
      const finalConfig = isWatchMode ? addWatchPlugin(config.config, config.name) : config.config;
      const context = await esbuild.context(finalConfig);
      contexts.push({
        name: config.name,
        context
      });
    } catch (error) {
      console.error(`Failed to create context for ${config.name}:`, error);
    }
  }

  const endTime = Date.now();
  console.log(`Contexts created in ${((endTime - startTime) / 1000).toFixed(2)} seconds`);

  return contexts;
}

async function main() {
  try {
    const isWatchMode = process.argv.includes('--watch');
    const contexts = await createBuildContexts();

    if (contexts.length === 0) {
      console.error('No valid entry points found. Exiting.');
      process.exit(1);
    }

    // Initial build
    for (const { name, context } of contexts) {
      console.log(`Building ${name}...`);
      const result = await context.rebuild();
      notifyClients(result);
    }

    if (isWatchMode) {
      console.log('Watch mode enabled. Watching for changes...');
      for (const { context } of contexts) {
        await context.watch();
      }
      console.log('Watching...');
    } else {
      for (const { context } of contexts) {
        await context.dispose();
      }
      wss.close();
      console.log('Build completed successfully.');
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

main();


function addWatchPlugin(config: any, moduleName?: string) {
  const originalPlugins = config.plugins || [];
  return {
    ...config,
    plugins: [
      ...originalPlugins,
      {
        name: 'on-end-plugin',
        setup(build: any) {
          build.onEnd((result: any) => {
            console.log(`Watch build completed for ${moduleName}:`, new Date().toISOString());
            notifyClients(result);
            // Don't return anything from the onEnd callback
          });
        }
      }
    ]
  };
}