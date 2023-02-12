import Head from "next/head"
import { useEffect } from "react"

type HomePageProps = {
  pass: string
}
export default function Home(props: HomePageProps) {
  useEffect(() => {
    //@ts-ignore
    window.props = props
  })
  return (
    <>
      <Head>
        <title>Konoba</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>HELLO</main>
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {
      pass: process.env.PB_EMAIL || "",
    },
  }
}
