import webpack from 'webpack'
import path from 'path'

import { buildWebpack, BuildMode, BuildPaths, BuildPlatform } from './config/build'
import { platform } from 'os'

interface EvnVariables {
    mode?: BuildMode,
    port?: number,
    analyzer?:boolean
    platform?: BuildPlatform
}

export default (env: EvnVariables) => {

    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname,'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    }

   const config: webpack.Configuration =  buildWebpack({
        port: env.port ?? 3000,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
   })
    return config
} 