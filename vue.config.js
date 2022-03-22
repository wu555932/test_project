module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {},
      postcss: {
        plugins: [
          require('autoprefixer'),
          require('postcss-pxtorem')({
            rootValue: 37.5, // 转换基数37.5转为1rem
            propList: ['*'],
          }),
        ],
      },
    },
  },
  devServer: {
    hot: true,
    host: '127.0.0.1',
  },
};
