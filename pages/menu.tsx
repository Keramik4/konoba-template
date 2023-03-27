import Head from "next/head"
import { getMenuPage } from "../server/content"
import type { FoodSection } from "../server/content"
import { Menu } from "../components/menu"

type MenuPageProps = {
  food: FoodSection[]
}
export default function MenuPage(props: MenuPageProps) {
  const { food } = props
  return (
    <>
      <Head>
        <title>Konoba</title>
      </Head>
      <div>
        <Menu sections={food} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const content = await getMenuPage()
  if (!content) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      food: content,
    },
  }
}
