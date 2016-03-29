var path = require('path');

var ROOT_PATH = path.resolve(__dirname);

var APP_PATH = path.resolve(ROOT_PATH,'app');

console.log(APP_PATH);



//获取绝对路径 不包含文件名
console.log(path.dirname(__dirname));
console.log(__dirname);
