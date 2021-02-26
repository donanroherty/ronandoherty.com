import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-white dark:bg-gray-800 transition-colors duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
