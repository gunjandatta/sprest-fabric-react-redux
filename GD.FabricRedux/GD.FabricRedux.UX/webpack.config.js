var path = require("path");
var webpack = require("webpack");

module.exports = {
    // Root folder of source code
    context: path.join(__dirname, "src"),

    // Entry point(s)
    entry: {
        // HTML
        html: "./index.html",
        // JS
        javascript: "./index.js"
    },

    // Output
    output: {
        // Filename
        filename: "bundle.js",
        // Folder
        path: path.join(__dirname, "dist")
    },

    // Module
    module: {
        // Loaders
        loaders: [
            {
                // Target .js and .jsx files
                test: /.jsx?$/,
                // Use the "babel-loader" library
                loader: "babel-loader",
                // Exclude the npm libraries
                exclude: /node_modules/,
                query: {
                    // Compile Order:
                    // 1 - "babel-preset-react"
                    // 2 - "babel-preset-es2015"
                    presets: ["es2015", "react"]
                }
            },
            {
                // Target .htm and .html files
                test: /.html?$/,
                // Use the "file-loader" to copy the file to the output folder
                loader: "file?name=[name].[ext]"
            }
        ]
    }
}
