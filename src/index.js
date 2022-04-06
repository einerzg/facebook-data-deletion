const Koa = require('Koa');
const Router = require('koa-router');
const faceDataDeletion = require('./components/faceDataDeletion');

const app = new Koa();
const v1Router = new Router({ prefix: '/v1' });
const PORT = 4000;

// v1Router.use(async ctx => {
//   ctx.body = 'Hello world';
// });
v1Router.use('/faceDataDeletion', faceDataDeletion.v1.routes());

app.use(v1Router.routes());
app.listen(PORT);
console.log('Loading the in the port', PORT);