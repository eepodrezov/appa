import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshTypeScript from 'react-refresh-typescript'

import { BuildOptions } from './types';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { mode } = options;
  const isDev = mode === 'development';

  const assetLoader =      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }

  const svgrLoader =  {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ 
          loader: '@svgr/webpack', 
          options: { 
            icon: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'convertColors',
                  params: {
                    currentColor: true
                  }
                }
              ]
            }
          } 
        }],
      }

  const cssLoaderWithModules = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: true,
            exportOnlyLocals: false,
            localIdentName: isDev 
              ? '[path][name]__[local]--[hash:base64:5]' 
              : '[hash:base64:8]',
            namedExport: false, 
          },
          sourceMap: isDev,
        }
      },
      'sass-loader',
    ],
  };

  const cssLoaderWithoutModules = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader',
    ],
  };

  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader:  'ts-loader',
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
                before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
              }),
        }
      }
    ]
  };

  const fontsLoaders = {
    test: /\.(woff2?|ttf|otf|eot)$/,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name][ext]'
    }
  }

  return [
    assetLoader,
    svgrLoader,
    tsLoader,
    cssLoaderWithModules,
    cssLoaderWithoutModules,
    fontsLoaders
  ];
}