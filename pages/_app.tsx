import type { AppProps } from "next/app"
import Head from "next/head"
import "../styles/global.css"

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}
