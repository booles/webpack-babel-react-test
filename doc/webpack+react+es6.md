使用webpack+react+es6构建应用小记<一>
-------------------------------------

### webpack

webpack是一款模块加载器兼打包的工具，使用webpack，能够像Node.js一样处理依赖关系，解析出模块之间的依赖，将代码打包。对应各种不同文件类型的资源, Webpack 有对应的模块 *loader*，本文构建的应用使用到了*babel-loader*,可以把es6的文件转换成es5。更多loader:[http://webpack.github.io/docs/list-of-loaders.html](http://webpack.github.io/docs/list-of-loaders.html)

安装webpack:
`
npm install webpack -g
`
配置Webpack:
Webpack的构建过程需要一个配置文件,在根目录下建立文件*webpack.config.js*,配置大致如下：
``
module.exports = {
    entry:[
        './js/entry.js'
    ],
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js'
    },
    module:{
        loaders:[{
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            }
        ]
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    }
}
``







在根目录下建立文件
