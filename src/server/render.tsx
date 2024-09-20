import { Context } from 'koa';
import * as React from 'react';
import * as reactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server.js';
import { PassThrough } from 'stream';
import { getCssFiles } from './utils/helpers.js';
import { Html } from './html.js';
import App from '../ui/app.v2.js';

export async function render(ctx: Context) {

  const options = {
    bootstrapScripts: ['/public/bundle.js'],
    onShellReady() {
      ctx.response.set('content-type', 'text/html;charset=utf-8');
    }
  };

  const cssFiles = await getCssFiles();
  const resp = reactDOMServer.renderToPipeableStream(
    <Html cssFiles={cssFiles}>
      <StaticRouter location={ctx.url}>
        <App />
      </StaticRouter>
    </Html>
    , options);

  // Convert the write-able stream created by reactDOMServer.renderToPipeableStream to a read stream supported by Koa
  ctx.body = resp.pipe(new PassThrough());
}
