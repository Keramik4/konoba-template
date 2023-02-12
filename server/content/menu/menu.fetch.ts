import PocketBase from "pocketbase"
import { parseFood } from "./menu.parser"

export const fetchMenu = async (pb: PocketBase) => {
  const food = await fetchListOfFood(pb)
  return food
}

export type Food = {
  name: string
  description: string
  prize: number
  image: string
  id: string
  collectionId: string
}

const fetchListOfFood = async (pb: PocketBase) => {
  try {
    const list = await pb.collection("food").getList<Food>(1, 100)

    return list.items.map((food) => parseFood(food))
  } catch (error) {
    console.log("Error in initPbClient:", error)
    return null
  }
}
