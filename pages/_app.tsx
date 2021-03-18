import "../styles/global.css"
import "../styles/prism.css"
import { AppProps } from "next/app"
import { ThemeProvider } from "../state/ThemeProvider"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
