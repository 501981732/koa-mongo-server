const Koa = require('koa');
const app = new Koa();

const main = ctx => {
	ctx.response.body = 'hello world'
}
app.use(main);
app.listen(3000);
