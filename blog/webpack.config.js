module.exports = {
  mode: 'development',
  entry: ["./src/index.js"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["react", "es2015", "stage-1"]
        }
      }
    ],
    devtool: 'inline-source-map',
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
