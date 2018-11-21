import Koa from 'koa'
import path from 'path'
import '../src/db/' // 数据库
import config from '../config'
import bodyParser from 'koa-bodyparser' //Request Body解析器
import controllerInit from '../src/controllers/' // 路由配置

import log from '../src/middleware/logger-async.js' //log中间件
import error from '../src/middleware/error.js'
import serve from 'koa-static' // 静态文件部署
import chalk from 'chalk' //颜色插件
import Logger from 'mini-logger' //日志
// import render from 'koa-swig'
import views from 'koa-views'
// import co from 'co'

const app = new Koa()

// swig
// app.context.render = co.wrap(render({
//     root: config.viewDir,
//     autoescape: true,
//     cache: 'memory', // disable, set to false
//     ext: 'html',
//     varControls:["[[","]]"],
//     writeBody: false
// }));

app.use(bodyParser())

// async中间件开发
app.use(error())
app.use(log())

// 静态资源部署
app.use(serve(path.join( __dirname,  '../src/views/')))

// 模板引擎
app.use(views(path.join( __dirname,  '../src/views/')))

controllerInit(app)

const logger = Logger({
    dir: config.logDir,
    format: 'YYYY-MM-DD-[{category}][.log]'
});

logger.error(new Error('error'))





app.listen(config.port, () => console.log(chalk.green(`app started at port ${config.port}...`)))



app.on('error',(err,ctx) =>{
	console.log('捕获到了!', err.message)
})

export default app