import React, {FC} from 'react'
import { useTheme } from 'styled-components';
import { Title } from '../../components/Text/Title';
import {MessageSection} from './style'

interface Props{
  message : string
}
export const Error : FC<Props> = ({ message}) => {
  const Theme = useTheme();
  return (
    <MessageSection>
      <Title text={message} marginTop="40px" color={Theme.palette.primary}  fontSize="28px"/>    
    </MessageSection>
  )
}
