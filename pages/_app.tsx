import "../styles/global.css"
import "../styles/prism.css"
import { useEffect } from "react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import * as gtag from "../lib/gtag"
import { ThemeProvider } from "../state/ThemeProvider"
import Layout from "../components/Layout"

const isProd = process.env.NODE_ENV === "production"

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // page view on mount
  useEffect(() => {
    const url = new URL(window.location.pathname, window.location.href)
    if (isProd) gtag.pageView(url)
  }, [])

  // page view on route change
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (isProd) gtag.pageView(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default App
