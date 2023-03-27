import { ListResult } from "pocketbase"
import type { Food, FoodType } from "./menu.fetch"
import { getConfig } from "../config"

export type FoodSection = {
  name: string
  order: number
  list: FoodMenuPosition[]
}

export type FoodMenuPosition = {
  name: string
  description: string
  prize: string
  thumbImage: string
  image: string
  id: string
}

export const parseListOfFood = (
  listOfFood: ListResult<Food>,
  foodTypes: ListResult<FoodType>
): FoodSection[] => {
  const { items } = listOfFood

  const result = foodTypes.items
    .reduce<FoodSection[]>((accumulator, current) => {
      const foodInSection = items.filter((food) => food.type === current.id)

      if (foodInSection.length === 0) return accumulator

      return [
        ...accumulator,
        {
          name: current.type,
          list: foodInSection.map(parseFood),
          order: current.order,
        },
      ]
    }, [])
    .sort((a, b) => a.order - b.order)
  return result
}

const parseFood = ({
  name,
  description,
  prize,
  image,
  collectionId,
  id,
}: Food): FoodMenuPosition => {
  const imagePath = parseImage(image, collectionId, id)

  return {
    name,
    description,
    prize: parseMoney(prize),
    thumbImage: parseThumbImage(imagePath),
    image: imagePath,
    id: id,
  }
}

const parseMoney = (prize: number) => `${Number(prize).toFixed(2)} EUR`

const parseImage = (image: string, collectionId: string, itemId: string) =>
  `${getConfig("apiUrl")}/api/files/${collectionId}/${itemId}/${image}`

const parseThumbImage = (imagePath: string) =>
  `${imagePath}?thumb=${getConfig("thumbSize")}`
