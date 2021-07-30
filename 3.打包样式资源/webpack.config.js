/* webpack 配置文件：
  作用： 指示webpack 进行哪些命令。运行webpack指令时，会加载里面的配置
*/ 

// 用来拼接绝对路径
const {resolve}  = require('path')

// webpack配置
module.exports = {
  // 配置入口文件：
  entry:'./src/index.js',
  // 出口文件：
  output:{
    // 输出文件名+输出路径(相对路径)
    filename:'built.js',
    path:resolve(__dirname,'build')  //dirname表示当前文件所在的绝对路径
  },
  // laoder配置
  module:{
    rules:[
      // 详细的loader配置
      // 配置css-loader：
      /*style-loader：创建style标签，将js文件中的css样式添加到head标签中
        css-loader：将css文件变成commonJS模块插入到js中，里面内容是样式字符串
      */ 
      {
        test:/\.css$/,
        //loader的顺序不能变
        use:['style-loader', 'css-loader']
        // use:['css-loader','style-loader']
      },

      // 配置less-loader: 需要两个less文件：less-loader和less  npm i less -D
      {
        test:/\.less$/,
        use:['style-loader','css-loader','less-loader']
      }
    ]
  },

  // plugin配置
  plugins:[
    // 详细的plugin配置

  ],

  // 模式配置
  mode:'development'
  // mode:'production'
}