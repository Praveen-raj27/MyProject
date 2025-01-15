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
      {
        test: /\.css$/, // This matches .css files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    port: 8000,
    static: path.join(__dirname, "dist"), // Ensure contentBase points to 'dist'
    historyApiFallback: true, // This is the key fix
    hot: true, // Enable Hot Module Replacement (optional, for dev)
    open: {
      target: "http://localhost:8000/login",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Use the template from 'src'
    }),
  ],
};
