import styled from 'styled-components';


export const Card = styled.div`
  max-width: 400px;
  padding: 20px;
  margin: 20px;
  background-color: ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.tertiary};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius:  ${props => props.theme.borderRadius};
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
`

export const CardItens = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardImg = styled.div`
  flex: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 5px solid ${props => props.theme.palette.secondary};
 
`
export const Image = styled.img` 
  width: 100%;
  height: 100%;
`

