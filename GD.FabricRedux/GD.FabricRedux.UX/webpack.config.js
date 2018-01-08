var path = require('path');

module.exports = {
    // Target the output of the typescript compiler
    context: path.join(__dirname, "src"),

    // File(s) to target
    entry: './index.tsx',

    // Output
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },

    // Resolve the file extensions
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },

    // Module to define what libraries with the compiler
    module: {
        // Rules
        rules: [
            {
                // Target the .ts and .tsx files
                test: /\.tsx?$/,
                // Exclude the node modules folder
                exclude: /node_modules/,
                // Define the compiler to use
                use: [
                    {
                        // Compile the JSX code to javascript
                        loader: "babel-loader",
                        // Options
                        options: {
                            // Ensure the javascript works in legacy browsers
                            presets: ["es2015"]
                        }
                    },
                    {
                        // Compile the typescript code to JSX
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
};