import { Form, Input, Button, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [loginstate, setloginstate] = useState(0);
  const onFinish = (values) => {
    const post = {
      email: values.email,
      password: values.password,
    };
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((json) => {
        // console.log("json :", json);
        setloginstate(json);
      });

    console.log("Success:");
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (loginstate === 1) {
      // window.location.href = "/";
      navigate("/signup");
    }
  });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 10,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// ReactDOM.render(<Demo />, mountNode);
export default Signin;
