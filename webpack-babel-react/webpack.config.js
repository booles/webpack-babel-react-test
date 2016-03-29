module.exports = {
	entry:'./app.js',
	output:{
		path:__dirname,
		filename:'build.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style!css!'
			}
		]
	},
	resolve:{   
		extensions:['','.js','.css']
	}

}