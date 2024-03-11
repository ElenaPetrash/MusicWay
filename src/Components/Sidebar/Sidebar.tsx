import React, { useState } from "react";
import {
  SearchOutlined,
  HomeOutlined,
  MenuUnfoldOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { MenuItem } from "./Sidebar.types";
import { Menu, Layout } from "antd";
import { getItem } from "./utils";
import { Link } from "react-router-dom";
const { Sider } = Layout;

const items: MenuItem[] = [
  getItem(
    "Home",
    "1",
    <Link to="/">
      <HomeOutlined />
    </Link>
  ),
  getItem(
    "Search",
    "2",
    <Link to="/search">
      <SearchOutlined />
    </Link>
  ),
  getItem("My music", "sub1", <MenuUnfoldOutlined />, [
    getItem("Favorite", "3", <PlayCircleOutlined />),
    getItem("PlayList1", "4", <PlayCircleOutlined />),
    getItem("Create new playList", "5", <PlayCircleOutlined />),
  ]),
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        style={{ fontSize: "20px" }}
        defaultSelectedKeys={["0"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
