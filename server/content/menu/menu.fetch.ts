import PocketBase from "pocketbase"
import { parseListOfFood } from "./menu.parser"

export const fetchMenu = async (pb: PocketBase) => {
  const [food, foodTypes] = await Promise.all([
    fetchListOfFood(pb),
    fetchFoodTypes(pb),
  ])

  if (!food || !foodTypes) return null
  return parseListOfFood(food, foodTypes)
}

export type Food = {
  name: string
  description: string
  prize: number
  image: string
  id: string
  collectionId: string
  type: string
}

const fetchListOfFood = async (pb: PocketBase) => {
  try {
    const list = await pb.collection("food").getList<Food>(1, 100)

    return list
  } catch (error) {
    console.log("Error in initPbClient:", error)
    return null
  }
}

export type FoodType = {
  id: string
  order: number
  type: string
}

const fetchFoodTypes = async (pb: PocketBase) => {
  try {
    const list = await pb.collection("foodTypes").getList<FoodType>(1, 100)

    return list
  } catch (error) {
    console.log("Error in initPbClient:", error)
    return null
  }
}
