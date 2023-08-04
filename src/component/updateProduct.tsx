

import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../store/hooks';

import { useNavigate, useParams } from "react-router-dom"
import { updateProduct } from '../action/Product';

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


const UpdateProductComponent = () => {
    const { id } = useParams()
    console.log(id)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [form] = Form.useForm()


    // Đặt giá trị mặc định cho form từ dữ liệu sản phẩm
    const onFinish = (values: any) => {
        console.log(values)
        dispatch(updateProduct({ id: id, ...values }))
        navigate("/")
    };

    return (
        <Form
            form={form}
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
                    sửa
                </Button>
            </Form.Item>
        </Form>
    )
}

export default UpdateProductComponent