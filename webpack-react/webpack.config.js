var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname); //当前文件路径
var APP_PATH = path.resolve(ROOT_PATH,'app'); //项目文件夹
var BUILD_PATH = path.resolve(ROOT_PATH,'build'); //打包后的文件夹
var TEM_PATH = path.resolve(ROOT_PATH,'tem'); //打包后的文件夹

module.exports = {
	entry:{
		main:path.resolve(APP_PATH,'main.js'),
		index:path.resolve(APP_PATH,'index.js')
	}, //默认找到文件夹中的index.js
	output:{
		path:BUILD_PATH,
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:['style','css'],
				include:APP_PATH
			},
			{
		        test: /\.jsx?$/,
		        loader: 'babel',
		        include: APP_PATH,
		        query: {
		          presets: ['es2015']
		        }
		    }
		]
	},
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"hello world",
			template:path.resolve(TEM_PATH,'index.html'),
			filename:'index.html',
			chunks:['index']
		}),
		new htmlWebpackPlugin({
			title:"mian.html",
			template:path.resolve(TEM_PATH,'mian.html'),
			filename:'main.html',
			chunks:['main']
		})
	]
}
