import esbuild from 'esbuild'
import type { Format, Loader } from 'esbuild'
import externalGlobalPlugin from "esbuild-plugin-external-global";
import { commonConfig, isProduction, projectRoot, SDPPPTestResolvePlugin, typescriptSrcRoot } from "../../lib.esbuild.ts"
import { join } from "path"

const photoshopPluginConfig = {
    ...commonConfig,
    format: 'iife' as Format,
    entryPoints: {
        'index': join(typescriptSrcRoot, './plugins/photoshop/entry.tsx')
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
        }),
        SDPPPTestResolvePlugin
    ],
    sourcemap: false,
    minify: isProduction,
    loader: {
        '.psd': 'binary' as Loader,
        '.png': 'binary' as Loader
    }
}

const photoshopLibraryConfig = {
    ...commonConfig,
    format: 'iife' as Format,
    entryPoints: {
        'librarys': join(typescriptSrcRoot, './plugins/photoshop/librarys.mts'),
    },
    outdir: join(projectRoot, 'plugins/photoshop/dist'),
    sourcemap: false,  // Always disable sourcemap for librarys
    minifyWhitespace: true,
    minifySyntax: true,
    // Add any specific external settings for librarys here if needed
}

export function buildPhotoshopPlugin() {
    console.log('buildPhotoshopPlugin')
    return esbuild.build(photoshopPluginConfig)
}

export function buildPhotoshopLibrary() {
    console.log('buildPhotoshopLibrary')
    return esbuild.build(photoshopLibraryConfig)
}