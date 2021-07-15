import React, {FC} from 'react'
import { Subtitles } from './style'

interface SubtitleProps{
  message ?: string
  color : string
  fontSize ?: string
}

export const Subtitle : FC<SubtitleProps> = ({ message, color, fontSize}) => {
  return (
    <Subtitles color={color} fontSize={fontSize}>
      {message}
    </Subtitles>
  )
}
