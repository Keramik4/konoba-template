import { FC, useState } from "react"
import Image from "next/image"
import styled from "@emotion/styled"
import { useTheme } from "@mui/material/styles"
import type { FoodMenuPosition } from "../../server/content"
import { SubHeader, LightGrey, MainColor } from "../../styles"

export const MenuItem: FC<FoodMenuPosition> = ({
  name,
  description,
  prize,
  thumbImage,
}) => {
  const { palette } = useTheme()
  const [showAll, setShowAll] = useState(false)
  const descriptionToShow = showAll
    ? description
    : `${description.slice(0, 80)}...`

  return (
    <ItemContainer>
      <div>
        <SubHeader>{name}</SubHeader>
        <Amount color={palette.primary.main}>{prize}</Amount>
        <Description>
          {descriptionToShow}
          {!showAll && (
            <ShowMore onClick={() => setShowAll(true)} role="button">
              show
            </ShowMore>
          )}
        </Description>
      </div>
      <Image alt={name} src={thumbImage} height={90} width={120} />
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${LightGrey};
`

const Amount = styled.div`
  font-weight: 600;
  color: ${MainColor};
`
const Description = styled.p`
  padding-right: 4px;
`
const ShowMore = styled.span`
  cursor: pointer;
  font-weight: 600;
  padding-left: 4px;
`
