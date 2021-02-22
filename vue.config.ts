const path = require('path');
module.exports = {
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  },
  chainWebpack: (config) => {
    config.entryPoints.clear() // 清空默认入口
    config.entry('test').add(path.getPath('./src/main.ts')) // 重新设置
  }

}

