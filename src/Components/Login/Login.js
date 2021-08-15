import React, { useState } from "react";
// import { useDispatch } from 'react-redux'
import { Form, Input, Button, Typography, Alert, Space } from "antd";

// import Axios from "axios";
// import allActions from '../../Actions'
const { Title } = Typography;
function Login({ setUser }) {


    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    //保存用户名和密码
    const [form] = Form.useForm();
    const [Password, setPassword] = useState("");
    const [Err, setErr] = useState(false);

    //登录策略
    const submit = () => {
        //发送用户名和密码
        if (Password === "") {
            setErr(true)
            return;
        }

        console.log(form.getFieldsValue());
        form.validateFields().then(values => {
            setUser(values.username)
        })

        // props.history.push("/");
        // dispatch(allActions.userActions.setUser(User))

    };

    return (
        <div className="app">
            <Title level={2}>Login </Title>
            <Form {...layout} name="basic" style={{ width: "350px" }}
                form={form}
            >
                <Form.Item
                    label="User"
                    name="username"
                    rules={[{ required: true, message: "Please input your username!" }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: "Please input your password!" }]}
                >
                    <Input.Password onChange={(e) => setPassword(e.target.value)}


                    />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" onClick={submit}>
                            Submit
                        </Button>
                        <Button type="primary" onClick={submit}>
                            register
                        </Button>
                    </Space>
                    {Err ? <Alert message="Something wrong with your user name or password!" type="error" /> : <></>}
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
