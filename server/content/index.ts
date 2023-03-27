import { initPbClient } from "./pocketbase"
import { fetchMenu } from "./menu/menu.fetch"

export const getMenuPage = async () => {
  const pb = await initPbClient()

  if (!pb) return null

  const menu = await fetchMenu(pb)

  return menu
}

export type { FoodSection, FoodMenuPosition } from "./menu/menu.parser"
