import * as esbuild from 'esbuild'
import type { Loader } from 'esbuild'
import { commonConfig, isProduction, projectRoot, SDPPPTestResolvePlugin, typescriptSrcRoot } from "../lib.esbuild.ts";
import { join } from "path";

const sdsystemJSConfig = {
    ...commonConfig,
    entryPoints: {
        'sdppp-comfy': join(typescriptSrcRoot, './sdsystem/comfy/comfy-entry.mts'),
    },
    outdir: join(projectRoot, 'javascript'),
    plugins: [SDPPPTestResolvePlugin],
    sourcemap: (isProduction ? false : 'inline') as any,
    minify: isProduction,
    loader: {
        '.css': 'text' as Loader
    },
    external: [
        '/scripts/ui.js',
        '/scripts/ui/components/button.js', 
        '/scripts/ui/components/buttonGroup.js',
        '/sd-ppp-static/web/comfy.js',
        './sdppp-custom.js'
    ]
}

export function buildComfy() {
    console.log('buildComfy')
    return esbuild.build(sdsystemJSConfig)
        .then(result => {
            result.outputFiles?.forEach(outputFile => {
                if (outputFile.path.includes('sdppp-comfy.js')) {
                    outputFile.contents = Buffer.concat([
                        Buffer.from('\nif (typeof gradioApp == "undefined") {\n'),
                        outputFile.contents,
                        Buffer.from('\n}\n')
                    ])
                }
                if (outputFile.path.includes('sdppp-a1111.js')) {
                    outputFile.contents = Buffer.concat([
                        Buffer.from('\nif (typeof gradioApp != "undefined") {\n'),
                        outputFile.contents,
                        Buffer.from('\n}\n')
                    ])
                }
            })
            return result;
        })
}
