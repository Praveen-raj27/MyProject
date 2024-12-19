const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // Resolve the path to 'dist'
    filename: "bundle.js", // Specify the output filename
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    port: 8000,
    static: path.join(__dirname, "dist"), // Ensure contentBase points to 'dist'
    historyApiFallback: true, // This is the key fix
    hot: true, // Enable Hot Module Replacement (optional, for dev)
    open: true, // Open the browser automatically when the server starts
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use the template from 'src'
    }),
  ],
};
