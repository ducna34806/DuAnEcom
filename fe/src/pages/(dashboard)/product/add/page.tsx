/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Checkbox, FormProps, Input, message } from "antd";
import { Link } from "react-router-dom";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useMutation } from "@tanstack/react-query";
import instance from "@/configs/axios";
import { IoIosArrowBack } from "react-icons/io";
type FieldType = {
    name: string;
    price: number;
    featured: boolean;
    countInStock: number;
    image: string;
    description: string;
    category: string;
};
const AddProduct = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { mutate } = useMutation({
        mutationFn: async (formData: FieldType) => {
            try {
                return await instance.post(`/products`, formData);
            } catch (error) {
                throw new Error(error as any).message;
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Thêm mới sản phẩm thành công",
            });
            form.resetFields();
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log("Success:", values);
        mutate(values);
    };

    return (
        <>
            {contextHolder}
            <div className="flex items-center justify-between">
                <h1 className="text-xl">Thêm sản phẩm</h1>
                <Link to="/admin/products">
                    <Button>
                        <IoIosArrowBack />
                        Trở lại
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-[auto, 300px]">
                <Form
                    form={form}
                    name="basic"
                    layout="vertical"
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    {" "}
                    <Form.Item<FieldType>
                        label="Tên sản phẩm"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Tên sản phẩm không được bỏ trống",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>{" "}
                    <Form.Item<FieldType>
                        label="Giá sản phẩm"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: "Giá sản phẩm không được bỏ trống",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>{" "}
                    <Form.Item<FieldType>
                        label="Danh mục sản phẩm"
                        name="category"
                        rules={[
                            {
                                required: true,
                                message: "Danh mục san pham bat buoc",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Ảnh sản phẩm"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: "Anh san pham bat buoc",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item<FieldType> label="Mô tả " name="description">
                        <TextArea rows={4} />
                    </Form.Item>{" "}
                    <Form.Item<FieldType>
                        name="featured"
                        valuePropName="checked"
                    >
                        <Checkbox>Sản phẩm nổi bật</Checkbox>
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Số lượng sản phẩm trong kho"
                        name="countInStock"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};
export default AddProduct;
