import React from 'react'
import { FC } from 'react';
import { Title } from '../Text/Title';
import { useTheme } from 'styled-components';
import { Card, CardImg, CardItens, Image } from './style';
import { Subtitle } from '../Text/Subtitle';
import { Button } from '../Forms/Button';

interface CardItemProps {
  name : string
  image ?: string
  type ?: string
  size ?: string
  age ?: string
  gender ?: string
  location ?: string
  showbutton ?: boolean
}
export const CardItem : FC<CardItemProps> = ({ name, image, type, size, age, gender, location, showbutton }) => {
  const Theme = useTheme();
  return (
    <>
      <Card>
        <CardImg>
          <Image src={image} />
        </CardImg>
        <CardItens>
          <Title text={name} color={Theme.palette.tertiary}  fontSize="20px"/>
          <Subtitle message={"Tipo: " + type} color={Theme.palette.tertiary}/>
          <Subtitle message={"Tamanho: " +size} color={Theme.palette.tertiary}/>
          <Subtitle message={"Idade: " +age} color={Theme.palette.tertiary}/>
          {location && <Subtitle message={"Localização: " + location} color={Theme.palette.tertiary}/>}
          {gender && <Subtitle message={"Gênero: " + gender} color={Theme.palette.tertiary}/>}
          {showbutton ? 
            <Button title="Saber mais detalhes" marginTop="0.5" color={Theme.palette.secondary} padding="8px" fontColor={Theme.palette.tertiary} colorHover={Theme.palette.light}/>
          : null}
        </CardItens>
      </Card>
  </>
)};
