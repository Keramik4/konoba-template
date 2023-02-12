import type { Food } from "./menu.fetch"
import { getConfig } from "../config"

type FoodMenuPosition = {
  name: string
  description: string
  prize: string
  thumbImage: string
  image: string
}

export const parseFood = ({
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
  }
}

const parseMoney = (prize: number) => `${Number(prize).toFixed(2)} EUR`

const parseImage = (image: string, collectionId: string, itemId: string) =>
  `${getConfig("apiUrl")}/api/files/${collectionId}/${itemId}/${image}`

const parseThumbImage = (imagePath: string) =>
  `${imagePath}?thumb=${getConfig("thumbSize")}`
