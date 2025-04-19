import { commonConfig, projectRoot } from "../../_build/lib.ts"
import { dirname, join } from "path"
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))

export const config = {
    ...commonConfig,
    tsconfig: join(__dirname, './tsconfig.json'),
    format: 'iife',
    entryPoints: {
        'librarys': join(__dirname, './librarys.mts'),
    },
    outdir: join(projectRoot, 'plugins/photoshop/dist'),
    sourcemap: false,  // Always disable sourcemap for librarys
    minifyWhitespace: true,
    minifySyntax: true,
}