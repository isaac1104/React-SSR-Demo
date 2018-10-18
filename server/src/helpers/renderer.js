import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/App';

export default () => {
  const content = ReactDOMServer.renderToString(<App />);
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
