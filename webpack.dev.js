const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

const devConfig = {
  entry: {
    bundle: ['./src/index.tsx'],
  },
  mode: 'development',
  devtool: 'inline-source-map',
  // watch: true,
  devServer: {
    contentBase: './dist',
    port: 4000,
    hot: true, // 开启热更新模式！当你修改了代码，你再也不用手动刷新页面了，浏览器会自动帮忙刷新！
    overlay: true, // 如果代码发生了错误，直接把错误情况显示在浏览器的页面上！
    progress: true, // 显示你打包的进程
    // proxy: { // 配置跨域代理
    //   '/api': {
    //       target: 'http://localhost:4000',
    //       pathRewrite: {
    //           '/api': ''
    //       }
    //   }
    // }
  },
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ],
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin({}),
    new webpack.HotModuleReplacementPlugin()
  ],
  target: "electron-renderer"
};

module.exports = merge(baseConfig, devConfig);
