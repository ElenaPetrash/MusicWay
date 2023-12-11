import React from "react";
import { StyledContainer } from "./Container.styled";
import { IContainerProps } from "./Conatiner.types";

const Container = (props: IContainerProps) => {
  return <StyledContainer {...props}>{props.children}</StyledContainer>;
};

export default Container;
