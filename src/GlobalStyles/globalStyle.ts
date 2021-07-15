import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle `
   *{
      margin: 0;
      padding: 0;
      box-sizing:border-box;
      font-family: sans-serif;
   }
`

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 50px;
    max-width: 1300px;    
    width: 100%;
    
`;