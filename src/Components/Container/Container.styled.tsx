import { styled } from "styled-components";
import { Flex } from "antd";

export const StyledContainer = styled(Flex)<{
  $height?: string;
  $width?: string;
  $background?: string;
  $padding?: string;
  $margin?: string;
  $borderRadius?: string;
}>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "100%"};
  background: ${({ $background }) => $background ?? "initial"};
  padding: ${({ $padding }) => $padding ?? "initial"};
  margin: ${({ $margin }) => $margin ?? "initial"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "initial"};
`;
