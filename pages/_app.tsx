import type { AppProps } from "next/app"
import Head from "next/head"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import { createEmotionCache, mainFont, theme } from "../styles"

type KonobaProps = {
  emotionCache?: EmotionCache
} & AppProps

export default function MyApp(props: KonobaProps) {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={mainFont.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>
  )
}
