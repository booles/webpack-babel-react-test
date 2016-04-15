var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname); //当前文件路径
var SEARCH_PATH = path.resolve(ROOT_PATH,'search'); //项目文件夹
var TESTES6_PATH = path.resolve(ROOT_PATH,'testEs6'); //项目文件夹
var SEARCH_BUILD_PATH = path.resolve(ROOT_PATH,'search_build'); //打包后的文件夹

module.exports = {
	entry:{
		index:path.resolve(SEARCH_PATH,'index.jsx'),
		class:path.resolve(TESTES6_PATH,'class.js')
	}, //默认找到文件夹中的index.js
	output:{
		path:SEARCH_BUILD_PATH,
		filename:'[name].js'
	},
	module:{
		loaders:[
			{
				test:/.css$/,
				loaders:['style','css'],
				include:SEARCH_PATH
			},
			{
		        test: /\.jsx?$/,
		        loaders: ['react-hot','babel?presets[]=es2015&presets[]=react'],
		        include: SEARCH_PATH
		    }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
  	},
	devServer: {
	    historyApiFallback: true,
	    hot: true,
	    inline: true,
	    progress: true,
	},
	plugins:[
		new htmlWebpackPlugin({
			title:"My first react app",
			chunks:['index']
		}),
		new htmlWebpackPlugin({
			title:"class",
			filename:'class.html',
			chunks:['class']
		})
	]
}
