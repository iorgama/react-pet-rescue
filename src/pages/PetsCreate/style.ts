import styled from 'styled-components';
import { Container } from '../../GlobalStyles/globalStyle';

export const FormSection = styled(Container)`
  padding: 70px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Container};
`;

export const FormWrapper = styled.div`
  padding: 20px;
  width: 700px;
  border-radius: 4px;
  text-align: center;
  flex-direction: column;
  background-color: ${props => props.theme.palette.primary};
`
export const Form = styled.form`
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`