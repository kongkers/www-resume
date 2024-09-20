import * as React from 'react';

export type HtmlProps = {
  children: any;
  cssFiles: string[];
}

function generateKey(index: number): string {
  return `css-${index}`;
}

export function Html(props: HtmlProps): React.ReactElement {
  return(
    <html lang="eng">
    <head>
      <title>David Kong</title>
      <meta httpEquiv="Content-Type" content="text/html;charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet"/>
      {
        props.cssFiles.map((cssFile, index) =>
          <link href={cssFile} key={generateKey(index)} rel="stylesheet"/>
        )
      }
    </head>
    <body>
    <div id="root">
      {props.children}
    </div>
    </body>
    </html>
  );
}
