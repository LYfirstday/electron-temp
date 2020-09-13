const path = require('path');
// 把css样式从js文件中提取到单独的css文件中, 会将所有的css样式合并为一个css文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tsImportPluginFactory = require('ts-import-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
        test: /\.less$/,
        use: [{
            loader: 'style-loader'
          }, //替换之前的 style-loader
          {
            loader: 'css-loader'
          },
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240, //10K
            name: '[name].[ext]',
            outputPath: 'static/',
            esModule: false
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.(jsx|tsx|js|ts)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [tsImportPluginFactory({
              libraryName: 'antd',
              libraryDirectory: 'lib',
              style: true
            })]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        }
      }
    ]
  },
  resolve: {
    modules: ['./src/components', 'node_modules'], //从左到右依次查找第三方模块
    alias: { // 包别名配置
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, "src/components"),
      '@resources': path.resolve(__dirname, "src/resources"),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      // 对所有的包进行拆分
      chunks: 'all',
    },
  }
};
