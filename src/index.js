const Koa = require('koa');
const Router = require('koa-router');
const faceDataDeletion = require('./components/faceDataDeletion');

const app = new Koa();
const v1Router = new Router({ prefix: '/v1' });

// v1Router.use(async ctx => {
//   ctx.body = 'Hello world';
// });
v1Router.use('/faceDataDeletion', faceDataDeletion.v1.routes());

app.use(v1Router.routes());
app.listen(process.env.PORT || 4000);
