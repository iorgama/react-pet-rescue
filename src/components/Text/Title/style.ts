import styled, { StyledProps } from 'styled-components';

type TitleProps = StyledProps<{
  fontSize : string;
  color : string;
  marginTop ?: string;
  showBoxShadow ?: boolean;
}>;

export const Heading = styled.h1<TitleProps>`
  ${(props) => `font-size: ${props.fontSize}`};
  ${(props) => `color: ${props.color}`};

  ${(props) => props.marginTop ? `margin-top: ${props.marginTop}` : "margin: 20px 0"};

  ${(props) => props.showBoxShadow && `text-shadow: 2px 2px ${props.theme.palette.tertiary};`}
  line-height: 1.1;
  font-weight: 700;
`;
