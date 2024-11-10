const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = defineConfig({
  publicPath: 'http://localhost:5002/',
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote_vue',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/bootstrap.js'  // bootstrap.js로 변경
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^3.4.21'
          }
        }
      })
    ]
  },
  devServer: {
    port: 5002,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})
