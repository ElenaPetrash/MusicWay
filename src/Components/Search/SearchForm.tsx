import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./listMusic.json";

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

const SearchForm: React.FC<SearchProps> = (props) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    props.onSearch(value);
  };

  return (
    <Space direction="vertical" size={300}>
      <Search
        placeholder="what you want to listening today"
        value={props.value}
        onChange={handleChange}
        style={{ width: 200, border: "solid 2px blue", borderRadius: "5px" }}
      />
    </Space>
  );
};

export default SearchForm;
