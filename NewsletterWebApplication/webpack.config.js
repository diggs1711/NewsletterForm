module.exports = {
    entry: "./Scripts/App/app.js",
    output: {
        path: __dirname + "/build/js",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }]
    }
};
