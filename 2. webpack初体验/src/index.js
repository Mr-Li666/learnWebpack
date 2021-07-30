/*
  webpack入口起点文件

  1. 运行指令：
      开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
                webpack 会以index.js文件作为入口文件开始打包，打包后输出到build文件夹的built.js。整体打包环境是开发环境
      生成环境：webpack ./src/index.js -o ./build/built.js --mode=production
                整体的打包环境是生产环境

  2.结论：
      （1） webpack可以打包js、json文件， 不能直接打包css/img等文件
      （2）生产环境和开发环境都可以将ES6的模块化编译成浏览器可识别的模块化
      （3）生产环境比开发环境多一个压缩的js代码

*/

/* webpack可以打包js、json文件， 不能直接打包css文件*/ 
// import './index.css'

import data from './data.json'
console.log(data);
function add(x,y){
  return x + y
}

console.log(add(1,2))