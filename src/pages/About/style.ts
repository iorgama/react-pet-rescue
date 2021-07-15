import styled from 'styled-components';
import { Container } from '../../GlobalStyles/globalStyle';
import {MdPets} from 'react-icons/md'

export const SlideSection = styled(Container)`
  padding: 40px 20px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Container};
`;

export const TitleAboutSection = styled.div`
  margin-bottom: 20px;
`

export const MessageAboutSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  
  @media only screen and (max-width:860px) {
    justify-content: center;
  }

`
export const SubtitleAboutSection = styled.div`
  padding: 20px;
  max-width: 720px;
`

export const IconAboutSection =  styled.div`
  padding: 20px;
  
`

export const MdPetsIcon = styled(MdPets)`
  width: 10em;
  height: 10em;
  fill: ${props => props.theme.palette.primary};
`
export const AboutSection = styled(Container)`
  padding: 70px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Container};
`;