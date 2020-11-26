const path = require('path')
const dayjs = require('dayjs')
// const isDev = process.env.NODE_ENV === 'development'
const now = dayjs().format('YYYY-MM-DD HH:mm:ss')

function resolve(dir) {
  return path.join(__dirname, dir)
}
const PORT = process.env.PORT || 9050
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: PORT,
    host: 'localhost',
    overlay: {
      warnings: true,
      errors: true
    },
    before(app) {
      app.post('/upload', (req, res) => {
        setTimeout(() => {
          res.send({
            data: 'https://antd-simple-pro.oss-cn-beijing.aliyuncs.com/image/1605845717285.png'
          })
        }, 1500)
      })
    },
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      '/server/mock': {
        target: 'http://localhost:' + PORT,
        changeOrigin: true,
        pathRewrite: {
          '^/server/mock': '/'
        }
      },
      '/api': {
        target: 'http://115.29.224.69/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/server': {
        target: 'http://qyhever.com/e-admin',
        changeOrigin: true,
        pathRewrite: {
          '^/server': '/'
        }
      }
    }
  },
  pluginOptions: {
    // import global scss variables and mixins
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [resolve('./src/assets/styles/var.less')]
    }
  },
  chainWebpack(config) {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })


    config.plugin('define').tap((args) => {
      // DefinePlugin 设置值 必须 JSON 序列化 或者 使用 双引号 包起来
      args[0]['process.env'].NOW = JSON.stringify(now)
      return args
    })
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            '@primary-color': '#1890FF',
            '@menu-collapsed-width': '60px'
          },
          javascriptEnabled: true
        }
      }
    }
  }
}
