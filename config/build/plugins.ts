import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { Configuration, DefinePlugin } from 'webpack'
import  MiniCssExtractPlugin  from "mini-css-extract-plugin";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

import { BuildOptions } from './types'


export function buildPlugins({ mode, paths, ...options }:BuildOptions): Configuration['plugins'] {
        const isDev = mode === 'development'
    const isProd = mode === 'production'


    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({ template: paths.html, favicon: path.resolve(paths.public, 'favicon.ico') }),
        new DefinePlugin({
            __PLATFORM__: options.platform
        })
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

        const localesCopyPattern: CopyPlugin.PluginOptions['patterns'] = [{
            from: path.resolve(paths.public,'locales'), to: path.resolve(paths.output,'locales') 
        }]
        const fontsCopyPattern: CopyPlugin.PluginOptions['patterns'] = [{
            from: 'public/fonts',   
            to: 'fonts',             
            noErrorOnMissing: true,  
            globOptions: {
                ignore: ['**/.DS_Store', '**/Thumbs.db'] 
            }
        }]

        plugins.push(
             new CopyPlugin({
                    patterns: [
                        ...localesCopyPattern,
                        ...fontsCopyPattern
                    ],
                }),
        )
        if (options.analyzer) {
            plugins.push(new BundleAnalyzerPlugin())
        }
    }
   return plugins
}