const goods = require("./data/goods.json");
const ratings = require("./data/ratings.json");
const seller = require("./data/seller.json");

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    // hash 模式下可使用
    // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    publicPath: '/',
    baseUrl: '/',// 项目根路径
    outputDir: 'dist',//构建输出目录 npm run build
    assetsDir: 'static', // 静态资源目录（js、css、img、fonts）
    lintOnSave: process.env.NODE_ENV === 'development', // 是否开启eslint保存检测，有效值: true || false || 'error'

    devServer: {
        open: true, // 启动是否自动打开页面
        host: "localhost",// 真机测试：0.0.0.0
        port: 8081,
        https: false, //默认是false
        hotOnly: false,
        proxy: {
            // 配置跨域
            '/api': {
                target: 'http://localhost:5000/api/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before(app) {
            // http://localhost:8081/api/goods
            app.get('/api/goods', (request, response) => {
                response.json(goods);
            })

            app.get('/api/ratings', (request, response) => {
                response.json(ratings);
            })

            app.get('/api/seller', (request, response) => {
                response.json(seller);
            })

        }
    }
}
