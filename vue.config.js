const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8888,//端口号
    host: '127.0.0.1',//主机名127.0.0.1
    https: false,//协议
    open: true//启动服务是否自动打开浏览器
  },
  lintOnSave: false,//关闭严格检查
  productionSourceMap: false,//打包时不会生成.map文件，加快打包速度

  // proxy: {
  //   '/dev1-api': { // 代理标识, 如果出现了这个就代表需要代理
  //     target: 'http://localhost:3000',
  //     pathRewrite: {
  //       "^/dev1-api": ''
  //     }
  //   }
  // }
})

