const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        //libraryTarget: "commonjs2"
    },
    devtool: 'eval-cheap-source-map', // won't work on XD due to lack of eval
    devtool: false,
    externals: {
        uxp: 'commonjs2 uxp',
        photoshop: 'commonjs2 photoshop',
        os: 'commonjs2 os'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    plugins: [
                        "@babel/transform-react-jsx",
                        "@babel/proposal-object-rest-spread",
                        "@babel/plugin-syntax-class-properties",
                    ]
                }
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        //new CleanWebpackPlugin(),
        new CopyPlugin(['plugin'], {
            copyUnmodified: true
        })
    ]
};