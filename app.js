import Koa from 'koa'
import path from 'path'
import './mongodb/' // 数据库
import config from './config'
import bodyParser from 'koa-bodyparser' 
import initModules from './controllers/' // 路由配置

import log from './middleware/logger-async.js'
import serve from 'koa-static' // 静态文件部署


const app = new Koa()

app.use(bodyParser())

// async中间件开发
app.use(log())

initModules(app)
app.use(serve(
	 path.join( __dirname,  './views/')
))

app.listen(config.port, () => console.log(`app started at port ${config.port}...`))