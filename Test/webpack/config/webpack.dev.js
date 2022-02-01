
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
//注意output不能使用相对路径
module.exports = {
  mode: 'development',
  entry: ['./src/js/index.js','./src/index.html'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: './js/index.js',
    assetModuleFilename: 'img/[hash:5].[ext]',
  },
  module: {
    rules: [
      //less syntax
      {
        test: /\.less$/, //匹配所有的less文件
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          }, //loader使用不需要require
        ],
      },
      //eslint syntax check
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre', //提前加载使用
      },
      //js es6toes5
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  debug: true,
                  corejs: { version: 3 },
                  targets: {
                    chrome: '58',
                    ie: '9',
                  },
                },
              ],
            ],
            cacheDirectory: true,
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
      // url-loader for images
      //AssetModule for imges in v5
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/resource',
        // use: [
        // {
        //   loader: 'url-loader',
        //   options: {
        //     limit: 8192,
        //     publicPath: '../dist/img',
        //     outputPath: 'img',
        //     name:'[hash:5].[ext]'
        //   },
        // },
        // ],
      },
      // bundle HTML's img tag
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(eot|svg|woff2|tff|mp3|mp4)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'media/[hash:5].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: 'index.html', template: 'src/index.html' }),
  ],
  devServer: {
    // static: './dist',
    open: true,
    compress: true,
    hot: true,
    port:3000
  },
  devtool:'eval-cheap-module-source-map'
}


//     		 {
//         		test: /\.js$/,
//        			 exclude: /node_modules/,
//         		loader: "eslint-loader",
//         		options: {
         
//         		}
//      		 }
//         ]
//     }
// }