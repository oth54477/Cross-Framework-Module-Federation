const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = defineConfig({
  publicPath: 'http://localhost:5002/',
  configureWebpack: {
    experiments: {
      topLevelAwait: true
    },
    output: {
      libraryTarget: 'system'
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'remote_vue',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'remote_vue' },
        exposes: {
          './App': './src/App.vue',
          './mountApp': './src/mountApp.js'
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
