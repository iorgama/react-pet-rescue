import {useState, useEffect} from 'react'
import {PetDetailsSection} from './style'
import { getPet } from '../../services/PetApi/pet-api';
import { useParams } from 'react-router-dom';
import { CardItem } from '../../components/CardItem';
import { Title } from '../../components/Text/Title';
import { useTheme } from 'styled-components'

interface IPet {
  id: string;
  name: string;
  gender: string;
};

export const PetDetails = () => {   
  const Theme = useTheme();
  const [pet, setPet] = useState<IPet>();

  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    (async () => {
      const result = await getPet(id);
      setPet(result);
      setLoading(false);
    })()
  }, [id]);
 
   
  return (
    loading === false && pet ? (<PetDetailsSection>   
      <Title text="Pets Disponíveis" marginTop="40px" color={Theme.palette.primary}  fontSize="28px"/>
      <CardItem {...pet} showbuttonDelete = {true}/>
    </PetDetailsSection>) : null
  )
}
