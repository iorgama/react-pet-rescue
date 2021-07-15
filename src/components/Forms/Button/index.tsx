import React from 'react';
import { FC, ButtonHTMLAttributes } from 'react';
import {ButtonForm} from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  title ?: string
  color ?: string
  fontColor ?: string
  border ?: string
  padding ?: string
  colorHover ?: string
  marginLeft ?: string
  marginTop ?: string
}
export const Button : FC<ButtonProps> = ({ title, color, fontColor, border, padding, marginTop,colorHover,marginLeft }) => {
  return <ButtonForm 
          border = {border}
          padding= {padding}
          color= {color}
          fontColor= {fontColor}
          colorHover={colorHover}
          marginLeft={marginLeft}
          marginTop={marginTop}>
        {title}
    </ButtonForm>;
};