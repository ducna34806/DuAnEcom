import { IProduct } from "@/common/types/product";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";
type columnsProps = {
    handleDelete: (id: number) => void;
};
export const columns = ({
    handleDelete,
}: columnsProps): ColumnDef<IProduct>[] => [
    {
        accessorKey: "image_product",
        header: "Ảnh",
        cell: ({ row }) => {
            const imageUrl = row?.original?.image_product;
            return (
                <img
                    src={imageUrl}
                    alt="Product Image"
                    style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                    }}
                />
            );
        },
    },
    {
        accessorKey: "name_product",
        header: "Name",
    },
    {
        accessorKey: "price_product",
        header: "Price",
    },
    {
        accessorKey: "quantity_product",
        header: "Quantity",
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const id = row?.original?._id;
            return (
                <div>
                    <Button variant={"default"}>
                        <Pencil></Pencil>
                    </Button>
                    <Button
                        variant={"destructive"}
                        className="ml-5"
                        onClick={() => handleDelete(id)}
                    >
                        <Trash2></Trash2>
                    </Button>
                </div>
            );
        },
    },
];
