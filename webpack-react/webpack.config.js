var path = require('path');
var webpack = require("webpack");
module.exports = {
    entry:{
        app:[
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './js/entry'
        ]
    },
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000'
    },
    module:{
        loaders:[{
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.jsx?$/,
                loader: 'react-hot',
                exclude: /node_modules/,
                include: [path.join(__dirname, 'build')]
            }
        ]
    },
    resolve:{
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}
