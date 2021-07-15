import React, {useState, useEffect} from 'react'
import { CardItem } from '../../components/CardItem';
import { Title } from '../../components/Text/Title';
import {getAllPets} from '../../services/PetApi/pet-api'
import { CardItemSection, CardSection } from '../Home/style';
import {ListSection} from './style'
import { useTheme } from 'styled-components';

export const ListPets = () => {  
  const [pets, setPets] = useState([]);
  const showButton = false;

  useEffect(() => {
    (async () => {
      const result = await getAllPets();
      setPets(result);
    })()
  }, []);
  const Theme = useTheme();
  return (
    <ListSection>
      {pets.length > 0 ? 
      <CardSection>
        <Title text="Pets Disponíveis" marginTop="40px" color={Theme.palette.tertiary}  fontSize="28px"/>
        <CardItemSection>
          {pets.map(({ id, name, image, type, size, age}) => (
            <CardItem key={id} {...{ name, image, type, size, age}} showbutton={showButton} />
          ))}
        </CardItemSection>
      </CardSection>
      : null}
    </ListSection>
  )
}
