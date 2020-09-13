// 压缩css文件
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

// production development
const proConfig = {
  entry: {
    main: ['./main.tsx'],
    test: './src/test.js'
  },
  mode: 'production',
  plugins: [
    new OptimizeCssPlugin()
  ],
  optimization: {
    splitChunks: {
      // 对所有的包进行拆分
      chunks: 'all',
    },
  },
  target: "electron-main"
};

module.exports = merge(baseConfig, proConfig);
