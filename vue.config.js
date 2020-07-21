module.exports = {
  transpileDependencies: ['vue-module-decorators'],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/realworldapp-vue-ts/'
    : '/'
};
