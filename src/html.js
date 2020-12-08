import React from 'react'

import Favicons from './components/favicons'

export default ({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents,
}) => (
  <html
    className={`
      antialiased
      bg-gray-50
      text-gray-600
    `}
    lang="en-US"
    prefix="og: http://ogp.me/ns#"
    {...htmlAttributes}
  >
    <head>
      <meta
        charSet="utf-8"
      />

      <meta
        content="ie=edge"
        httpEquiv="x-ua-compatible"
      />

      <meta
        content="width=device-width, initial-scale=1"
        name="viewport"
      />

      <link
        rel="stylesheet"
        src="/iubenda.css"
      />

      <Favicons />

      {headComponents}
    </head>

    <body
      {...bodyAttributes}
    >
      {preBodyComponents}

      <div
        dangerouslySetInnerHTML={{ __html: body }}
        id="___gatsby"
        key={`body`}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function (w, d) {
              var loader = function () {
                var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
                s.src = "https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s, tag);
              };

              if (w.addEventListener) {
                w.addEventListener("load", loader, false);
              } else if (w.attachEvent) {
                w.attachEvent("onload", loader);
              } else {
                w.onload = loader;
              }
            })(window, document);
          `
        }}
      />

      {postBodyComponents}
    </body>
  </html>
)
