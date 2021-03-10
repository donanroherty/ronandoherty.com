import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦆</text></svg>"
          />
        </Head>
        <body className="bg-white dark:bg-gray-800 transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
