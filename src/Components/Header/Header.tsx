import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Flex, Tooltip } from "antd";

import { useNavigate } from "react-router-dom";
import { StyledButton } from "./Header.styles";

const { Header: HeaderAntD } = Layout;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderAntD style={{ padding: 0, background: "rgb(1 23 45)" }}>
      <Flex
        gap="small"
        justify="flex-end"
        align="center"
        style={{ margin: 20, background: "rgb(1 23 45)" }}
      >
        <Flex gap="small">
          <StyledButton type="default" onClick={() => navigate("/signUp")}>Sign Up</StyledButton>
          <StyledButton onClick={() => navigate("/signIn")}>
            Sign In
          </StyledButton>
          <Tooltip title="User">
            <StyledButton
              type="primary"
              shape="circle"
              style={{ color: "#fffff" }}
              icon={<UserOutlined />}
            />
          </Tooltip>
        </Flex>
      </Flex>
    </HeaderAntD>
  );
};

export default Header;
