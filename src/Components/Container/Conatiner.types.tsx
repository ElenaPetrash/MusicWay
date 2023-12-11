import { FlexProps } from "antd";
import { ReactNode } from "react";

export interface IContainerProps extends FlexProps {
  children: ReactNode;
  $height?: string;
  $width?: string;
  $background?: string;
  $padding?: string;
  $margin?: string;
  $borderRadius?: string;
}

// export type ContainerProps = {
//     children: ReactNode;
//   } | FlexProps
