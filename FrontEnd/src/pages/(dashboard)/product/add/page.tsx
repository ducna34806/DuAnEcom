import { ProductJoiSchema } from "@/common/validations/product";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/components/ui/use-toast";
import instance from "@/configs/axios";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const form = useForm({
        resolver: joiResolver(ProductJoiSchema),
        defaultValues: {
            name_product: "",
            price_product: 0,
            image_product: "",
        },
    });

    const { mutate } = useMutation({
        mutationFn: (formData) => instance.post("/products", formData),
        onSuccess: () => {
            form.reset();
            toast({
                variant: "success",
                title: "Them moi done",
                action: (
                    <ToastAction altText="Goto schedule to undo">
                        <a href="./">Back</a>
                    </ToastAction>
                ),
            });
        },
    });
    const onSubmit = (data: any) => {
        console.log(data);

        //mutate(data);
    };
    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="name_product"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên sản phẩm </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ten san pham"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="price_product"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> Giá sản phẩm </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Giá san pham"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="image_product"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel> Ảnh sản phẩm </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Giá san pham"
                                        {...field}
                                        type="file"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </>
    );
};
export default AddProduct;
