//const { defineConfig } = require('@vue/cli-service')
//module.exports = defineConfig({
  //transpileDependencies: true
//})
// this code was here already????

module.exports = {
    devServer: {
      // '/api/states'
      // 'http://127.0.0.1:3000/api/states'
      proxy: 'http://127.0.0.1:3000'
    }
  }