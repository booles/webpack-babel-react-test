/**
 * Created by Õı‘  on 2016/3/4.
 */
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
