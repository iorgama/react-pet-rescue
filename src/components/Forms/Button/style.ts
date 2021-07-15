import styled, { StyledProps } from 'styled-components';

type Props = StyledProps<{
  border?: string;
  color?: string;
  radius?: string;
  fontColor?: string;
  padding ?: string;
  colorHover ?: string;
  marginLeft ?: string;
  marginTop ?: string;
}>;

export const ButtonForm = styled.button<Props>`
  ${(props) => props.border ? `border: ${props.border}` : "border: none"};
  ${(props) => props.marginLeft ? `margin-left: ${props.marginLeft}rem` : "margin-left: 0px"};
  ${(props) => props.marginTop ? `margin-top: ${props.marginTop}rem` : "margin-top: 0px"};
  ${(props) => `background-color: ${props.color}`};
  ${(props) => `color: ${props.fontColor}`};
  ${(props) => `padding: ${props.padding}`};
  border-radius: ${props => props.theme.borderRadius};
  font-size: 1.2rem;  
  text-transform: uppercase;
  font-weight: 700;

  &:hover {
    ${(props) => `background-color: ${props.colorHover}`};
  }
`;
