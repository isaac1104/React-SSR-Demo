import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

export default req => {
  const content = ReactDOMServer.renderToString(
    <StaticRouter context={{}} location={req.path}>
      <Routes />
    </StaticRouter>
  );
  return `
    <html>
      <head>
      </head>
      <body>
        <div id='root'>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `;
};
