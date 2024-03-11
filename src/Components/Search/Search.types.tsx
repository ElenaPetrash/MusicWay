import { ChangeEvent, Children, ReactNode } from "react";
import type {} from "antd";
export interface SearchProps {
  onSearch: (value: string) => void;
  value: string;
}
// export type SearchProps = [
// onSearch:[
// value:string,
// _e: Event,
// info:string]]

// export type ContainerProps = {
//     children: ReactNode;
//   } | FlexProps
