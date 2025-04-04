import { buildComfy } from './backends/comfy.build.ts'
import { buildPhotoshopLibrary, buildPhotoshopPlugin } from './frontends/adobe/photoshop.build.ts'
import { projectRoot } from './lib.esbuild.ts'
import { existsSync } from 'fs'
import { join } from 'path'

const startTime = Date.now()


async function build() {
  try {
    const builds = [
      buildPhotoshopPlugin(),
      buildPhotoshopLibrary(),
      buildComfy()
    ]
    if (existsSync(join(projectRoot, 'typescripts/photoshop-internal'))) {
      const { buildPhotoshopInternal } = await import(join(projectRoot, 'typescripts/photoshop-internal/build/esbuild.ts'))
      builds.push(buildPhotoshopInternal())
    }
    await Promise.all(builds);

    const endTime = Date.now();
    const totalTime = (endTime - startTime) / 1000;
    console.log(`Total execution time: ${totalTime.toFixed(2)} seconds`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

build();
