//alert('欢迎来到妙味课堂！');

var str = require('./app2');

//alert( str )

/*require('style!css!./base.css');
require('style!css!./index.css');*/

/*require('./base.css');
require('./index.css');*/

require('./base');
require('./index');

document.getElementById('demo').innerHTML = str;