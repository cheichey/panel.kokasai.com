const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    devtool: "source-map",
    target: ["web", "es5"],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: { url: false }
                    },
                    {
                        loader:"sass-loader",
                        options: {
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
        }),
        new HtmlWebpackPlugin({
            filename: "404.html",
            template: "./static/404.html",
            inject: false
        }),
        new webpack.DefinePlugin({
            'process.env.API_URL' : '\'' + process.env.API_URL + '\'',
        })
    ],
    devServer: {
        historyApiFallback: true,
        host: 'local-panel.kokasai.com',
        port: 8080
    }
};
