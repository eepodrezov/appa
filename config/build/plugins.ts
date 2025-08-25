import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { Configuration } from 'webpack'
import  MiniCssExtractPlugin  from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { BuildOptions } from './types'


export function buildPlugins({ mode, paths, ...options }:BuildOptions): Configuration['plugins'] {
        const isDev = mode === 'development'
    const isProd = mode === 'production'


    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html }),
    ]


    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
        plugins.push(new ForkTsCheckerWebpackPlugin())
        plugins.push(new ReactRefreshWebpackPlugin())
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                    filename: 'css/[name].[contenthash:8].css',
                    chunkFilename: 'css/[name].[contenthash:8].css'
                }
        ))
        if (options.analyzer) {
            plugins.push(new BundleAnalyzerPlugin())
        }
    }

   return plugins
}