export interface IProduct {
    _id?: number | string;
    name_product: string;
    //category?: string
    price_product: number;
    quantity_product: number;
    image_product: string;
    description_product: string;
    featured_product: boolean;
    countInStock_product: number;
}
