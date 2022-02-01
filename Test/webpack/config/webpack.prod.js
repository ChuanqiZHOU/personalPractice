
//生产环境配置


const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

//注意output不能使用相对路径
module.exports = {
  mode: 'production',
  entry: ['./src/js/index.js', './src/index.html'],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: './js/index.js',
    assetModuleFilename: 'img/[hash:5].[ext]',
    publicPath: '/',
  },
  module: {
    rules: [
      //less syntax
      {
        test: /\.less$/, //匹配所有的less文件
        use: [
          {
            // loader: 'style-loader'
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // ident: 'postcss',
                plugins: [
                  require('postcss-flexbugs-fixes'),
                  require('postcss-preset-env')({
                    autoprefixer: {
                      flexbox: 'no-2009',
                    },
                    stage: 3,
                  }),
                  require('postcss-normalize')(),
                ],
              },
            },
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
      // 压缩css文件
      // {
      //   test: /.s?css$/,
      //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      // },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'css/[name].css' }),
  ],
  devtool: 'cheap-module-source-map',
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