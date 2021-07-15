import styled, { StyledProps } from 'styled-components';


type Props = StyledProps<{
  showMarginForLabel ?: boolean
}>;

export const Wrapper =  styled.div<Props>`
  display: flex;
  ${(props) => props.showMarginForLabel && 'margin: 0 2.5rem 1.2rem 2rem;'}
  flex-direction: column;
  text-align: left;
`;

export const InputForm = styled.input`
  padding: 10px 14px;
  display: block;
  outline: 0;
  width: 100%;
  font-size: 1.1rem;  
  color: ${props => props.theme.palette.primary}; 
  border-radius: ${props => props.theme.borderRadius};
  border: 2px solid ${props => props.theme.palette.primary}; 
  box-sizing: border-box;
  resize: vertical; 
`;

export const LabelForm = styled.label`  
  margin-bottom: 0.4rem;
  padding: 12px 12px 12px 0; 
  font-weight: 700;
  color: ${props => props.theme.palette.light}; 
  text-shadow: 2px 2px ${props => props.theme.palette.tertiary};
  font-size: 1.2rem;  

`
 