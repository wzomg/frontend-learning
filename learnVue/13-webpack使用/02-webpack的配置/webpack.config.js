//依赖 node 包，使用 npm install 安装 package.json中的依赖后会生成目录 node_modules
const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};