import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { GA_TRACKING_ID } from "../lib/gtag"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/assets/RD-circle.svg" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                // gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </Head>
        <body className="transition-colors duration-500 bg-white dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
