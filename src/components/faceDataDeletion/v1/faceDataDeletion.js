const Router = require('koa-router');

const router = new Router();

router.get('/', async ctx => {
  try {
    console.log(ctx)
    // console.log(ctx.request)
    // console.log('-----------');
    ctx.body = 'OK';
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
