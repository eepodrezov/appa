import webpack  from "webpack";

import { buildDevServer } from "./dev-server";
import { buildLoaders } from "./loaders";
import { buildPlugins } from "./plugins";
import { buildResolvers } from "./resolvers";
import { BuildOptions } from "./types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options
    const isDev = mode === 'development'
    return {
            mode: mode ?? 'development',
            entry: paths.entry,
            module: {
                rules: buildLoaders(options),
            },
            resolve: buildResolvers(options),
            output: {
                path: paths.output,
                filename: '[name].[contenthash].js',
                clean: true,
            },
            plugins: buildPlugins(options),
            devtool: isDev && 'inline-source-map',
            devServer: isDev ? buildDevServer(options) : undefined
        }
} 