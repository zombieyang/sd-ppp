import { commonConfig, isProduction, projectRoot, SDPPPTestResolvePlugin, typescriptSrcRoot } from "../../_build/lib.ts";
import { dirname, join } from "path";
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

export const config = {
    ...commonConfig,
    entryPoints: {
        'sdppp-comfy': join(__dirname, './src/comfy-entry.mts'),
    },
    tsconfig: join(__dirname, './tsconfig.json'),
    outdir: join(projectRoot, 'javascript'),
    plugins: [SDPPPTestResolvePlugin(join(typescriptSrcRoot, 'test/mocha/comfy/comfy.test.mts'))],
    sourcemap: isProduction ? false : 'inline',
    minify: isProduction,
    loader: {
        '.css': 'text'
    },
    external: [
        '/scripts/ui.js',
        '/scripts/ui/components/button.js',  
        '/scripts/ui/components/buttonGroup.js',
        '/sd-ppp-static/web/comfy.js',
        './sdppp-custom.js'
    ]
}