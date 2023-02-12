import Head from "next/head"
import { useEffect } from "react"
import { getMenuPage } from "../server/content"

type MenuPageProps = {
  content: any
}
export default function Home(props: MenuPageProps) {
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
  const content = await getMenuPage()
  if (!content) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      content,
    },
  }
}

//todo
// https://github.com/grommet/grommet-starter-new-app
//add gromet to project
//create food component
//add content 6 food in two categories
// add 6 drinks in 2 categories
// create seperate page for //drink
//and seperate page for food
