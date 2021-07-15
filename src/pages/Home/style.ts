import styled from 'styled-components';
import { Container } from '../../GlobalStyles/globalStyle';

export const SearchSection = styled(Container)`
  padding: 70px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Container};
`;

export const CardItemSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const CardSection = styled.section`
  background-color: ${props => props.theme.palette.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  padding: 20px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`