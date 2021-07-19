import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Title } from '../../components/Text/Title'
import { FormSection, FormWrapper, Form } from './style'
import { useTheme } from 'styled-components';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { createPet } from '../../services/PetApi/pet-api';

export const PetsCreate = () => {
  const [name, setName] = useState<string>("")
  const [weight, setWeight] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [age, setAge] = useState<string>("")
  const [size, setSize] = useState<string>("")
  const [image, setImage] = useState<string>("")
  const [location, setLocation] = useState<string>("")
  const [info, setInfo] = useState<string>("")
  const Theme = useTheme();
  const showBoxShadow = true;
  const showMarginForLabel = true;
  const history = useHistory();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      'name' : name,  
      'weight' : weight,
      'type' : type,
      'age' : age,
      'image' : image,
      'size' : size,
      'gender' : gender,
      'info' : info,
      'location' : location
    };
    
    const result = await createPet(data);
    if(result){
      history.push('/pets');
    }
    
  }
  return (
    <FormSection>      
      <FormWrapper>
        <Title text="Cadastrar Pet" marginTop="20px" color={Theme.palette.light} showBoxShadow={showBoxShadow} fontSize="28px"/>
        <Form onSubmit={handleSubmit}>
          <Input 
            id="name" 
            value={name}  
            setValue={setName}
            label="Nome do Pet:"
            required
            showMargin={showMarginForLabel}                 
          />
          <Input 
            id="gender" 
            value={gender}  
            setValue={setGender}
            label="Gênero:" 
            required
            showMargin={showMarginForLabel}                     
          />
          <Input 
            id="location" 
            value={location}  
            setValue={setLocation}
            label="Cidade/Estado:" 
            required
            showMargin={showMarginForLabel}                     
          />
          <Input 
            id="info" 
            value={info}  
            setValue={setInfo}
            label="Telefone:" 
            placeholder="(xx) xxxx-xxxx"
            required
            showMargin={showMarginForLabel}                     
          />
          <Input 
            id="weight" 
            value={weight}  
            setValue={setWeight}
            label="Peso:" 
            required
            showMargin={showMarginForLabel}                     
          />
          <Input 
            id="type" 
            value={type}  
            setValue={setType}
            label="Tipo:"  
            required
            showMargin={showMarginForLabel}                    
          />
          <Input 
            id="age" 
            value={age}  
            setValue={setAge}
            label="Idade:"  
            required
            showMargin={showMarginForLabel}                    
          />
          <Input 
            id="size" 
            value={size}  
            setValue={setSize}
            label="Porte:"   
            required
            showMargin={showMarginForLabel}                   
          />
          <Input 
            id="image" 
            value={image}  
            setValue={setImage}
            label="URL da imagem:"  
            required
            showMargin={showMarginForLabel}                    
          />
          <Button
            title="Cadastrar" 
            padding="12px" 
            border={`3px solid ${Theme.palette.secondary}`} 
            marginLeft="0.5"
            color={Theme.palette.primary} 
            fontColor={Theme.palette.light} 
            colorHover={Theme.palette.secondary} 
          />     
        </Form>
      </FormWrapper>
    </FormSection>
  )
}
