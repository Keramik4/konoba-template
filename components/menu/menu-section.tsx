import { FC } from "react"
import { FoodSection } from "../../server/content"
import { MenuItem } from "./menu-item"
import { Header } from "../../styles"

export const MenuSection: FC<FoodSection> = ({ name, list }) => {
  return (
    <div>
      <Header>{name}</Header>
      {list.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  )
}
