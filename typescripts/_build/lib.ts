import { fileURLToPath } from 'url'
import path from 'path'
import { createRequire } from 'module'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '../..');
const typescriptSrcRoot = path.resolve(__dirname, '..');
const isProduction = process.env.NODE_ENV === 'production'

export { projectRoot, typescriptSrcRoot, isProduction }
const nodeModuleRequire = createRequire(projectRoot + '/')

export const commonConfig = {
    bundle: true,
    format: 'esm',
    loader: {
        '.tsx': 'tsx',
        '.ts': 'ts'
    },
}

export function SDPPPTestResolvePlugin(testEntryPath: string) {
    return {
        name: 'sdppp test resolve',
        setup({ onResolve, onLoad }: { onResolve: any, onLoad: any }) {
            if (isProduction) {
                onResolve({ filter: /^sdppp-test\// }, (args: any) => {
                    // return empty file
                    return {
                        path: args.path,
                        namespace: 'empty-module'
                    }
                })
                // Handle loading the virtual module
                onLoad({ filter: /.*/, namespace: 'empty-module' }, () => {
                    return {
                        contents: '// Empty module for production',
                        loader: 'js'
                    }
                })

            } else {
                onResolve({ filter: /^mocha$/ }, () => {
                    return {
                        path: nodeModuleRequire.resolve("mocha/mocha"),
                        external: false
                    }
                })
                onResolve({ filter: /^sdppp-test\// }, (args: any) => {
                    return {
                        path: testEntryPath,
                        external: false
                    }
                })
            }
        }
    }
}