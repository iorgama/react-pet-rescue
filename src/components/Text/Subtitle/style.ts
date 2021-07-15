import styled, { StyledProps } from 'styled-components';

type SubtitleProps = StyledProps<{
  fontSize ?: string;
  color : string;
}>;

export const Subtitles = styled.p<SubtitleProps>`
  ${(props) => props.fontSize ? `font-size: ${props.fontSize}px` : "font-size: 18px"};
  ${(props) => `color: ${props.color}`};
  line-height: 24px;
`;