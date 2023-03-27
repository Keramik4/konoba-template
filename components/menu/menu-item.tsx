import { FC, useState } from "react"
import Image from "next/image"
import type { FoodMenuPosition } from "../../server/content"

export const MenuItem: FC<FoodMenuPosition> = ({
  name,
  description,
  prize,
  thumbImage,
}) => {
  const [showAll, setShowAll] = useState(false)
  const descriptionToShow = showAll
    ? description
    : `${description.slice(0, 80)}...`

  return (
    <div className="flex p-4 justify-between border border-gray-light">
      <div>
        <h3 className="font-bold text-xl font-serif">{name}</h3>
        <div className="text-blue">{prize}</div>
        <p>
          {descriptionToShow}
          {!showAll && (
            <span
              className="cursor-pointer font-semibold pl-1"
              onClick={() => setShowAll(true)}
              role="button"
            >
              show
            </span>
          )}
        </p>
      </div>
      <Image
        alt={name}
        src={thumbImage}
        height={90}
        width={120}
        className="w-[120px] h-[90px] object-cover"
      />
    </div>
  )
}
