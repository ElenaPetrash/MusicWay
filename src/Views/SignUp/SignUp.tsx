import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { Container } from "../../Components/Container";
import { Footer } from "antd/es/layout/layout";
import { StepsRegistration } from "../../Components/StepRegistration";

const { Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const SignUp: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const onMenuClick = () => {
    console.log("click");
  };

  const onSubmit = (e: React.FormEvent<HTMLElement>) => {};

  return (
    <Container
      vertical
      justify="space-between"
      align="center"
      $height="100%"
      $width="100%"
      $background="rgb(1 23 45)"
      $margin="0 0 0 0"
    >
      
      <h1
        style={{
          color: "white",
          fontSize:"45px"
          
        }}
      >
        Sign Up to MusicWay
      </h1>
   
      <Container
        gap="small"
        vertical
        $margin="50px 0 150px 0"
        $background="#ffff"
        $padding="24px 48px"
        $borderRadius="12px"
        $width="fit-content"
        $height="fit-content"
      >
        <StepsRegistration/>
       
      </Container>
      <Container $width="100%" $height="100%">
        </Container>
    </Container>
  );
};

export default SignUp;
