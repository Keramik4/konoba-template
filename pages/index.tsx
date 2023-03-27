import Head from "next/head"
import { useEffect } from "react"
import Button from "@mui/material/Button"

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
      <main>
        HELLO
        <Button variant="contained" color="primary" disableElevation>
          Disable elevation
        </Button>
      </main>
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
