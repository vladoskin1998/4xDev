const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = env = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                use: "svg-url-loader",
            },
        ],
    },
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "style.[contenthash].css",
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port: 8080,
    },
};


