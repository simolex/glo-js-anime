const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (env) => {
    const mode = env.mode ?? "development";
    const isDev = mode === "development";

    const srcPath = path.resolve(__dirname, "src");
    const buildPath = path.resolve(__dirname, "build");

    return {
        mode,
        context: path.resolve(__dirname, "src"),
        entry: {
            index: path.resolve(__dirname, "src", "pages", "index.js"),
            login: path.resolve(__dirname, "src", "pages", "login.js"),
            style: path.resolve(__dirname, "src", "pages", "style.js")
        },
        output: {
            filename: "js/[name].[contenthash:5].js",
            path: buildPath,
            clean: true,
            publicPath: "/"
        },
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
                    use: "file-loader"
                },
                {
                    test: /\.(s[ac]ss|css)$/i,
                    exclude: [/node_modules/],
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader, // Creates `style` nodes from JS strings
                        {
                            loader: "css-loader" // Translates CSS into CommonJS
                        },
                        {
                            loader: "sass-loader" // Compiles Sass to CSS
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: path.resolve(__dirname, "public", "index.html"),
                chunks: ["index", "style"]
            }),
            new HtmlWebpackPlugin({
                filename: "login.html",
                template: path.resolve(__dirname, "public", "login.html"),
                chunks: ["login", "style"]
            }),
            new CopyPlugin({
                patterns: [
                    { from: path.resolve(srcPath, "db", "db.json"), to: path.resolve(buildPath) },
                    { from: path.resolve(srcPath, "img"), to: path.resolve(buildPath, "img") },
                    { from: path.resolve(srcPath, "css"), to: path.resolve(buildPath, "css") },
                    { from: path.resolve(srcPath, "js"), to: path.resolve(buildPath, "js") },
                    { from: path.resolve(srcPath, "fonts"), to: path.resolve(buildPath, "fonts") }
                ]
            }),
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash:5].css",
                chunkFilename: "css/[name].[contenthash:5].css"
            })
        ],
        devtool: isDev ? "eval-cheap-module-source-map" : undefined,
        devServer: isDev
            ? {
                  port: 3000,
                  open: true,
                  historyApiFallback: true,
                  hot: true
              }
            : undefined

        // src: path.resolve(__dirname, "src")
    };
};
