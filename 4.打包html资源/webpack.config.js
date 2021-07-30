const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry:'./src/index.js',
  output:{
    filename:'built.js',
    path:resolve(__dirname, 'build')
  },
  //配置loader
  module:{
    rules:[
      // css-loader
      {

      },
      // less-loader
      {

      }
    ]
  },

  // 配置plugin
  plugins:[
    //html-plugin: 默认会创建一个html文件，自动引入打包输出的所有资源
    // 以./src/index.html作为模板 ， 自动创建一个新的html文件，并且将打包好的built.js文件插入进去
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],
  mode:'development'
}