import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="assets/RD.svg" />
        </Head>
        <body className="transition-colors duration-500 bg-white dark:bg-gray-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
