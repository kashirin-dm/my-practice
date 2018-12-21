module.exports = {
  lintOnSave: false,
  baseUrl: '',
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,
  chainWebpack: config => {
	config.optimization.delete('splitChunks')
  }
}

