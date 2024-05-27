import { Context } from 'koa';
import Router  from 'koa-router';

function healthzHandler(ctx: Context) {
  ctx.body = {
    status: 'OK',
  }
}

export const healthz= new Router();

healthz
  .get('/healthz', healthzHandler);
