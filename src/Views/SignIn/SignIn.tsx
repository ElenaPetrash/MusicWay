import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import {
  GoogleOutlined,
  FacebookOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { Container } from "../../Components/Container";

const { Title } = Typography;

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const SignIn: React.FC = () => {
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
      {/* <Space size={100} direction="vertical"> */}
      <h1
        style={{
          color: "white",
          fontSize: "45px",
        }}
      >
        Sign In to MusicWay
      </h1>

      <Container
        gap="small"
        vertical
        $margin="150px 0 150px 0"
        $background="#fff"
        $padding="24px 48px"
        $borderRadius="12px"
        $width="fit-content"
        $height="fit-content"
      >
        <Button icon={<GoogleOutlined />}>SignIn with Google</Button>
        <Button icon={<FacebookOutlined />}>SignIn with FaceBook</Button>
        <Button icon={<AppleOutlined />} onClick={onMenuClick}>
          SignIn with
        </Button>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, marginTop: "20px", color: "white" }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" onSubmit={onSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Container>
      <Container $background="rgb(1, 23, 45)" $width="100%" $height="10rem">
        <p></p>
      </Container>
    </Container>
  );
};

export default SignIn;
