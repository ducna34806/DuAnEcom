/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import instance from "@/configs/axios";
import { DataTable } from "./DataTable";
import { columns } from "./Columns";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { data, isError, isLoading, error, isFetching } = useQuery({
        queryKey: ["products"],
        queryFn: () => instance.get("/products"),
    });
    const { mutate } = useMutation({
        mutationFn: async (id: any) => {
            const confirm = window.confirm("Bạn chắc chắn muốn xóa ");
            if (!confirm) return;
            await instance.delete(`/products/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
    const handleDelete = (id: number) => mutate(id);
    const handleAdd = () => {
        navigate("/admin/products/add");
    };
    if (isLoading || isFetching) return <div>Loading...</div>;
    if (isError) return <div>{error.message}</div>;
    return (
        <>
            <h1>Quản lý sản phẩm </h1>
            <button onClick={() => handleAdd()}>Them moi</button>
            <div className="container py-10 mx-auto">
                <DataTable
                    columns={columns({ handleDelete })}
                    data={data?.data.products}
                />
            </div>
        </>
    );
};

export default ProductList;
