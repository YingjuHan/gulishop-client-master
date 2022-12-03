module.exports = {

  devServer: {
    open: true,
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        changeOrigin: true,
      },
    },
  },
  lintOnSave: false,
  configureWebpack: (config) => {
    //调试JS
    config.devtool = "source-map"
  },
  css: {
    //查看CSS属于哪个css文件
    sourceMap: true,
  },
};
