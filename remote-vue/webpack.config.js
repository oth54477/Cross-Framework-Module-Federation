const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "auto",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 5002,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.(js|mjs)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: "usage",
                    corejs: 3,
                    modules: false
                  }
                ]
              ],
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-transform-runtime"
              ]
            }
          }
        ],
        type: "javascript/auto"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "remote_vue",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.vue"
      },
      shared: {
        vue: {
          singleton: true,
          requiredVersion: "^3.4.21"
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ]
};
