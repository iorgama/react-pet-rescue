import { FC, ButtonHTMLAttributes } from 'react';
import {ButtonForm} from './style';
import {FaTrash} from 'react-icons/fa';

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
  onClick ?: () => void
  deleteIcon ?: boolean
}
export const Button : FC<ButtonProps> = ({ value, title, color, fontColor, border, padding, marginTop, colorHover, marginLeft, onClick, deleteIcon }) => {
  return <ButtonForm 
          border = {border}
          padding= {padding}
          color= {color}
          fontColor= {fontColor}
          colorHover={colorHover}
          marginLeft={marginLeft}
          marginTop={marginTop}
          onClick={onClick}>
        {title}
        {deleteIcon && <FaTrash />}
    </ButtonForm>;
};