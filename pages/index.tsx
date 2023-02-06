import Head from "next/head"
import { useEffect } from "react"
import { fetchAllContent } from "../server/content"

type PageProps = {
  pass: string
  content: any
}
export default function Home(props: PageProps) {
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
  const content = await fetchAllContent()
  return {
    props: {
      pass: process.env.PB_EMAIL || "",
      content,
    },
  }
}
