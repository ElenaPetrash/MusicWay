import React from "react";
import { Table } from "antd";
import { styled } from "styled-components";

export const MusicListStyled = styled(Table)<{
  $height?: string;
  $width?: string;
  $background?: string;
  $padding?: string;
  $margin?: string;
  $borderRadius?: string;
  $color?: string;
}>`
  width: ${({ $width }) => $width ?? "100%"};
  height: ${({ $height }) => $height ?? "100%"};

  padding: ${({ $padding }) => $padding ?? "initial"};
  margin: ${({ $margin }) => $margin ?? "initial"};
  border-radius: ${({ $borderRadius }) => $borderRadius ?? "initial"};

  .ant-table-cell {
    background:rgb(1 23 45);
    color: white;
  }
  .ant-table-cell-row-hover {
    color: rgb(7 39 71);
    background: blue;
  }
`;

export const ColumnTable = styled(Table.Column)<{
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
