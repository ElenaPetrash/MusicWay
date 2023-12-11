import React from "react";
import { AudioOutlined } from "@ant-design/icons";

import { Input, Space } from "antd";
import type { SearchProps } from "./Search.types";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch: SearchProps["onSearch"] = (value) =>
  console.log(value);

const SearchForm: React.FC = () => (
  <Space direction="vertical" size={300}>
    <Search placeholder="what you want to listening today" onSearch={onSearch} style={{ width: 200, border: 'solid 2px blue',borderRadius: '5px'}} />
  </Space>
);

export default SearchForm;
