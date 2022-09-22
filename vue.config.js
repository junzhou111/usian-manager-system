const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./", //项目打包之后白屏问题
  devServer: {
    port: 8888,
    host: "localhost",
    open: true,
    https: false,
    proxy: {
      //在 devServer 对象里设置跨域
      [process.env.VUE_APP_BASE_API]: {
        // 代理标识, 如果出现了这个就代表需要代理
        target: process.env.VUE_APP_SERVICE_URL,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "", // 重写路由, 把想替换掉的路由地址替换为空或者别的
        },
      },
    },
  },
  lintOnSave: false, //关闭严格检查
  productionSourceMap: false, //打包时不会生成.map文件，加快打包速度
});
