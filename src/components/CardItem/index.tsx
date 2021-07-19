import { FC } from 'react';
import { Title } from '../Text/Title';
import { useTheme } from 'styled-components';
import { Card, CardImg, CardItens, Image, NameCard } from './style';
import { Subtitle } from '../Text/Subtitle';
import { Button } from '../Forms/Button';
import { Link, useHistory } from 'react-router-dom';
import { deletePet } from '../../services/PetApi/pet-api';

interface CardItemProps {
  id ?: string
  name : string
  image ?: string
  type ?: string
  size ?: string
  age ?: string
  info ?: string
  gender ?: string
  location ?: string
  showbutton ?: boolean
  showbuttonDelete ?: boolean
}

export const CardItem : FC<CardItemProps> = ({ id, name, info, image, type, size, age, gender, location, showbutton, showbuttonDelete = false }) => {
  const Theme = useTheme();
  const history = useHistory();

  const handleGoBack = () => {
    history.push ('/');
  }

  const handleClick = async (id: string) => {
    await deletePet(id);
    history.push ('/pets');
  };

  return (
    <>
      <Card>
        <CardImg>
          <Image src={image} />
        </CardImg>
        <CardItens>
          <NameCard>
            <Title text={name} color={Theme.palette.tertiary}  fontSize="20px"/>
            {showbuttonDelete && <Button onClick={() => handleClick(id!)} deleteIcon={true} color={Theme.palette.secondary} padding="4px" fontColor={Theme.palette.tertiary} colorHover={Theme.palette.light}/>}            
          </NameCard>
          
          <Subtitle message={"Tipo: " + type} color={Theme.palette.tertiary}/>
          <Subtitle message={"Tamanho: " +size} color={Theme.palette.tertiary}/>
          <Subtitle message={"Idade: " +age} color={Theme.palette.tertiary}/>
          {location && <Subtitle message={"Localização: " + location} color={Theme.palette.tertiary}/>}
          {gender && <Subtitle message={"Gênero: " + gender} color={Theme.palette.tertiary}/>}
          {info && <Subtitle message={"Informação: " + info} color={Theme.palette.tertiary}/>}
          {showbutton && <Link to={`/pets/${id}`}>          
            <Button title="Saber mais detalhes" marginTop="0.5" color={Theme.palette.secondary} padding="8px" fontColor={Theme.palette.tertiary} colorHover={Theme.palette.light}/>
          </Link> }
          {showbuttonDelete &&          
              <Button onClick={handleGoBack} title="Voltar" marginTop="0.5" color={Theme.palette.secondary}   padding="8px" fontColor={Theme.palette.tertiary} colorHover={Theme.palette.light}/> }
        </CardItens>
      </Card>
  </>
)};
