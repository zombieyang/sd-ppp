import { fileURLToPath } from 'url'
import path from 'path'
import { createRequire } from 'module'
import type { Loader, Format } from 'esbuild'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '../../..');
const typescriptSrcRoot = path.resolve(__dirname, '..');
const isProduction = process.env.NODE_ENV === 'production'

export { projectRoot, typescriptSrcRoot, isProduction }
const nodeModuleRequire = createRequire(projectRoot + '/')

export const commonConfig = {
    bundle: true,
    format: 'esm' as Format,
    tsconfig: path.join(__dirname, '../../tsconfig.json'),
    loader: {
        '.tsx': 'tsx' as Loader,
        '.ts': 'ts' as Loader
    },
}

export function SDPPPTestResolvePlugin(testEntryPath: string) {
    return {
        name: 'sdppp test resolve',
        setup({ onResolve }: any) {
            if (isProduction) {
                onResolve({ filter: /^sdppp-test\// }, (args: any) => {
                    // return empty file
                    return {
                        path: "/dev/null",
                        external: false
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