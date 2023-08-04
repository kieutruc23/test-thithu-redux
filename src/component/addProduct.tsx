
import React from 'react';
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../store/hooks';
import { AddProduct } from '../action/Product';
import { useNavigate } from "react-router-dom"
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    name?: string;
    price?: string;
    remember?: string;
};
const AddProductComponet = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const onFinish = (values: any) => {
        dispatch(AddProduct(values))
        navigate("/")
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="name"
                name="name"
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="price"
                name="price"
                rules={[{ required: true, message: 'Please input your price!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default AddProductComponet