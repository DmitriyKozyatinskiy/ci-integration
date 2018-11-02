const path = require('path');
const { DefinePlugin } = require('webpack');
const { spawnSync } = require('child_process');
const Dotenv = require('dotenv-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const currentVersion = spawnSync('git', ['describe']);
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.ts',
    devtool: isProduction ? 'source-map' : 'eval',
    mode: isProduction ? 'production' : 'development',
    target: 'node',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: [/node_modules/, '/src/spec']
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new Dotenv({
        path: './.env',
      }),
      new DefinePlugin({
        'process.env.VERSION': JSON.stringify(currentVersion.stdout.toString()),
      }),
    ],
  };
};
