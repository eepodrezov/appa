import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import path from 'path'
import { BuildOptions } from './types'

export function buildDevServer({ port, paths }: BuildOptions): DevServerConfiguration {
    return {
        port: port ?? 3000,
        open: true,
        historyApiFallback: true,
        hot: true,
        static: [
            {
                directory: paths.public,
                publicPath: '/',
                watch: true
            },
            {
                directory: path.join(paths.public, 'fonts'),
                publicPath: '/fonts',
                watch: true
            }
        ],
        devMiddleware: {
            publicPath: '/'
        }
    }
}