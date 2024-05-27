import Koa, { Context } from 'koa';
import koaStatic from 'koa-static';
import Router from 'koa-router';
import koaMount from 'koa-mount';
import koaBodyParser from 'koa-bodyparser';
import koaLogger from 'koa-logger';
import koaJson from 'koa-json';
import path from 'path';
import nconf from 'nconf';
import { loadConfig } from '../config/index.js';
import { errorHandler } from './errors/handler.js';
import { logger } from './logger/index.js';
import { healthz } from './routes/healthz.js';
import { render } from './render.js';

loadConfig();

const __cwd = process.cwd();
const STATIC_PATH = path.join(__cwd, '/dist/public');
const STATIC_ASSET_PATH = path.join(__cwd, '/assets/public');
const STATIC_FONTS_PATH = path.join(__cwd, '/assets/fonts');

const PORT = nconf.get('PORT');
const app = new Koa();
const router = new Router();

app.use(koaLogger({
  transporter: (_str, [, method, url, status, time, length]) => {
    if (status !== undefined) {
      logger.info(`${method} ${url} [${status}][${time} - ${length}]`);
    }
  },
}));
app.use(errorHandler);

app.use(koaBodyParser({
  jsonLimit: '5mb'
}));
app.use(koaMount('/public/assets', koaStatic(STATIC_ASSET_PATH)));
app.use(koaMount('/public/fonts', koaStatic(STATIC_FONTS_PATH)));
app.use(koaMount('/public', koaStatic(STATIC_PATH)));

app.use(koaJson());
app.use(healthz.routes());


router.get('(.*)', async (ctx: Context): Promise<void> => {
  await render(ctx);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT, () => {
  logger.info(`Server is listening on port ${PORT}`);
});

export default app;

