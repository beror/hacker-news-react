var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundled.js'
    },
    devServer: {
        port: 8080,
        contentBase: ["./public"],
        historyApiFallback: true,
        open: false
    },
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                exclude: '/node_modules/',
                use: 'babel-loader'
            },
            {
                test: /(\.(s[ac]ss)|(css))$/,
                exclude: '/node_modules/',
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}