const Router = require('koa-router');

const router = new Router();

router.post('/', async ctx => {
  try {
    console.log(ctx.request)
    ctx.body = 'OK';
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
