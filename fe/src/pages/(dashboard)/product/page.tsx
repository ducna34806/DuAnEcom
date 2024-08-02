/* eslint-disable @typescript-eslint/no-explicit-any */
import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, message, Popconfirm, Space, Table } from "antd";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const ProductManagement = () => {
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get("/products"),
    });
    const dataSource = data?.data?.docs.map((product: IProduct) => ({
        key: product._id,
        ...product,
    }));

    const { mutate } = useMutation({
        mutationFn: async (id) => {
            try {
                return await instance.delete(`/products/${id}`);
            } catch (error) {
                throw new Error((error as any).message);
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Xóa sản phẩm thành công",
            });
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message,
            });
        },
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    const columns = [
        {
            key: "iamge",
            dataIndex: "image",
            title: "Ảnh sản phẩm",
            render: (_: any, product: IProduct) => {
                return (
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-20"
                    />
                );
            },
        },
        { key: "name", dataIndex: "name", title: "Tên sản phẩm" },
        { key: "price", dataIndex: "price", title: "Giá sản phẩm" },
        {
            key: "countInStock",
            dataIndex: "countInStock",
            title: "Số lượng",
        },
        {
            key: "featured",
            dataIndex: "featured",
            title: "Nổi bật",
            render: (_: any, product: IProduct) => (
                <span>{product.countInStock ? "Có" : "Không"}</span>
            ),
        },
        {
            key: "actions",
            render: (_: any, product: any) => {
                return (
                    <Space>
                        <Button type="primary">
                            <Link to={`/admin/products/edit/${product._id}`}>
                                <AiFillEdit className="w-6 h-6" />
                            </Link>
                        </Button>
                        <Popconfirm
                            title="Xóa sản phẩm"
                            description="Bạn chắc chắn muốn xóa sản phẩm này?"
                            onConfirm={() => mutate(product._id)}
                            // onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button danger>
                                <MdDelete className="w-6 h-6" />
                            </Button>
                        </Popconfirm>
                    </Space>
                );
            },
        },
    ];
    return (
        <>
            {contextHolder}
            <div className="flex items-center justify-between">
                <h1 className="text-xl">Quản lý sản phẩm</h1>
                <Link to="/admin/products/add">
                    <Button>
                        <FaPlus />
                        Thêm sản phẩm
                    </Button>
                </Link>
            </div>
            <Table columns={columns} dataSource={dataSource} />
        </>
    );
};

export default ProductManagement;
