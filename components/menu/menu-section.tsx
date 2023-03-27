import { FC } from "react"
import { FoodSection } from "../../server/content"
import { MenuItem } from "./menu-item"

export const MenuSection: FC<FoodSection> = ({ name, list }) => {
  return (
    <div>
      <h2 className="font-bold text-2xl font-serif">{name}</h2>
      {list.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  )
}
