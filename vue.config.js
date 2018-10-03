module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    host: 'local.pyteam.co',
    port: 8080,
    disableHostCheck: true,
    hot: true,
    open: true,
    inline: true,
    publicPath: '/',
  }
}
