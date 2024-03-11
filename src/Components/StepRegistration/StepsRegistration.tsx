import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const StepsRegistration: React.FC = () => {

  return (
    <>
      
      <Form
        
      >
       
        <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

        <Form.Item label="Nickname">
          <Input />
        </Form.Item>
        
        <Form.Item label="Your role">
          <TreeSelect
            treeData={[
              { required: true,
                title: "Autor",
                value: "Autor",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
              { required: true,
                title: "User",
                value: "User",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
              { required: true,
                title: "Admin",
                value: "Admin",
                children: [{ title: "Bamboo", value: "bamboo" }],
              }
            ]}
          />
        </Form.Item>
       
        <Form.Item label="Your birthday">
          <DatePicker />
        </Form.Item>
       
        <Form.Item label="About you">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Your foto or image</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="">
          <Button type="primary">Sign Up</Button>
        </Form.Item>
       
      </Form>
    </>
  );
};

export default StepsRegistration;
