import React, { ReactNode } from "react";
import styled from "styled-components"; 
import Title from "antd/es/typography/Title";
import { LinkProps } from "react-router-dom";


const StyledTittle = styled(Title)<{
  $color?: string;
  $textAlign?: string;
  $margin?: string;
  $marginTop?: string;
  $justifyContent?: string;
  Text?: ReactNode;
  Link?: LinkProps;
  Title?: string;
  Paragraph?: string;
  children?: string;
  
}>`
  color: ${({ $color }) => $color ?? "#ffffff"};
  text-align: ${({ $textAlign }) => $textAlign ?? "center"};
  margin: ${({ $margin }) => $margin ?? "auto"};
  margin-top: ${({ $marginTop }) => $marginTop ?? "50px"}; 
  justify-content: ${({ $justifyContent }) => $justifyContent ?? "center"};
`;

export default StyledTittle;
