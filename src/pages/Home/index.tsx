import React, {useState} from 'react'
import { Button } from '../../components/Forms/Button';
import { Input } from '../../components/Forms/Input'
import { CardItem } from '../../components/CardItem'
import { SearchSection, CardSection, CardItemSection, Form } from './style'
import { useTheme } from 'styled-components';
import {getAllPets, searchPet} from '../../services/PetApi/pet-api'
import { Title } from '../../components/Text/Title';
import { Error } from '../../components/Error';

export const Home = () => { 
  const [name, setName] = useState("");
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const showButton=true;
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(name.trim().length > 0){
      const result = await searchPet(name);
      setPets(result);
    }else{      
      const result = await getAllPets();
      setPets(result);
    }
    setLoading(false);
  };

  const Theme = useTheme();
  return (
    <>
      <SearchSection>
        <Form onSubmit={handleSubmit}>
          <Input 
            id="search" 
            value={name}  
            setValue={setName}                 
            placeholder="Digite o nome do pet"
          />
          <Button 
            title="Buscar" 
            padding="12px" 
            border="none" 
            marginLeft="0.5"
            color={Theme.palette.primary} 
            fontColor={Theme.palette.light} 
            colorHover={Theme.palette.secondary} 
          />         
        </Form>
      </SearchSection>
      {pets.length > 0 ? 
        <CardSection>
          <Title text="Pets" marginTop="40px" color={Theme.palette.tertiary}  fontSize="28px"/>
          <CardItemSection>
            {pets.map(({ id, name, image, type, size, age, location}) => (
              <CardItem key={id} {...{ id, name, image, type, size, age, location}} showbutton={showButton} />
            ))}
          </CardItemSection>         
        </CardSection> 
        : null }
      
      {pets.length === 0 && loading === false && <Error message="Que pena! Não encontramos o bichinho que você procurou." />}

      
    </>
  )
}
