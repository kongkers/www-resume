import { Context, Next } from 'koa';
import { logger } from '../logger/index.js';
import { FormError } from './error.definitions.js';

export async function errorHandler(ctx: Context, next: Next) {
  try {
    await next();
  } catch(errors) {
    logger.error(JSON.stringify(errors, null, 2));
    ctx.status = errors.statusCode || errors.status || 500;

    if (errors instanceof FormError) {
      ctx.body = {
        errors,
      };
    } else {
      ctx.body = {
        message: errors.message,
      };
    }
  }
}
