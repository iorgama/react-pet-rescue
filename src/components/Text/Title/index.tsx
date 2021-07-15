import React, {FC} from 'react'
import { Heading } from './style'

interface TitleProps{
  text : string
  color : string
  fontSize : string
  marginTop ?: string;
  showBoxShadow ?: boolean;
}

export const Title : FC<TitleProps> = ({ text, color, fontSize, marginTop, showBoxShadow}) => {
  return (
    <Heading color={color} fontSize={fontSize} marginTop ={marginTop} showBoxShadow={showBoxShadow}>
      {text}
    </Heading>
  )
}
