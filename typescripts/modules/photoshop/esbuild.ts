import externalGlobalPlugin from "esbuild-plugin-external-global";
import { commonConfig, isProduction, projectRoot } from "../../_build/lib.ts"
import { dirname, join } from "path"
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

export const config = {
    ...commonConfig,
    tsconfig: join(__dirname, './tsconfig.json'),
    format: 'iife',
    entryPoints: {
        'index': join(__dirname, './src/entry.tsx')
    },
    outdir: join(projectRoot, 'plugins/photoshop/dist'),
    external: [
        'uxp', 'photoshop', 'os', 'fs', 
        'react', 'react-dom/client', 'jimp', 'socket.io-client', 
        'react/jsx-runtime', 'buffer',
        'SDPPPInternal'
    ],
    plugins: [
        externalGlobalPlugin.externalGlobalPlugin({
            'react': 'window.React',
            'react/jsx-runtime': 'window.ReactJSXRuntime',
            'react-dom/client': 'window.ReactDOMClient',
            'jimp': 'window.Jimp',
            'socket.io-client': 'window.socketIO',
            'buffer': 'window.Buffer',
            'SDPPPInternal': 'window.SDPPPInternal'
        })
    ],
    sourcemap: isProduction ? false : 'linked',
    minify: isProduction,
    loader: {
        '.psd': 'binary',
        '.png': 'binary'
    }
}
