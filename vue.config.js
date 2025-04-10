const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true, 
  chainWebpack: (config) => {
    // Handle images (jpg, jpeg, png, gif, svg)
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash].[ext]', // Customize output name format
      })
      .end();

    // Handle PDFs
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash].[ext]',
      })
      .end();
  },
})
