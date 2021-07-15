import React  from 'react';
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
  value ?: string
  onClick?:
  | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
  | undefined;
}
export const Button : FC<ButtonProps> = ({ value, title, color, fontColor, border, padding, marginTop,colorHover,marginLeft, onClick = () => {} }) => {

  console.log(value);
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e);
  }

  return <ButtonForm 
          border = {border}
          padding= {padding}
          color= {color}
          fontColor= {fontColor}
          colorHover={colorHover}
          marginLeft={marginLeft}
          marginTop={marginTop}
          onClick={handleOnClick}>
        {title}
    </ButtonForm>;
};