import type { CardSize } from '../enums/card-size.enum'
import type { IconType } from '../enums/icon-type.enum'

export interface LinkData {
  id: number
  title: string
  url: string
  host: string
  iconType: IconType
  imageUrl?: string
  size: CardSize
  mobileSize: CardSize
}
