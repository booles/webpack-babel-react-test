使用webpack+react+es6构建应用小记<一>
-------------------------------------

### webpack

webpack是一款模块加载器兼打包的工具，使用webpack，能够像Node.js一样处理依赖关系，解析出模块之间的依赖，将代码打包。对应各种不同文件类型的资源, Webpack 有对应的模块 *loader*，本文构建的应用使用到了*babel-loader*,可以把es6的文件转换成es5。更多loader:[http://webpack.github.io/docs/list-of-loaders.html](http://webpack.github.io/docs/list-of-loaders.html)

<<<<<<< HEAD
安装webpack:
`
npm install webpack -g
`
配置Webpack:
Webpack的构建过程需要一个配置文件,在根目录下建立文件*webpack.config.js*,配置大致如下：
`
=======
###### 安装webpack:

`
npm install webpack -g
`

安装成功后便有了全局的webpack命令。

###### 配置Webpack:

Webpack的构建过程需要一个配置文件,在根目录下建立文件*webpack.config.js*,配置大致如下：

```js
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
```

对webpack打包行为进行配置，部分配置说明：

1. entry：指定打包入口文件
2. output：配置打包结果，path定义输出的文件夹路径，filename打包后文件名称
3. module：定义模块的处理逻辑，loaders配置需要用到的加载器。文件匹配到test中的正则时，就调用loader对应的加载器进行处理。
4. resolve:解析模块路径配置。常用extensions属性，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全。例如加载一个js文件时，只要require('index')就可以加载index.js文件了。
>   *注意一下, extensions 第一个是空字符串! 对应不需要后缀的情况.*
