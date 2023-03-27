import { FC } from "react"
import { FoodSection } from "../../server/content"
import { MenuSection } from "./menu-section"

export const Menu: FC<{ sections: FoodSection[] }> = ({ sections }) => {
  return (
    <>
      {sections.map((section) => (
        <MenuSection {...section} />
      ))}
    </>
  )
}
