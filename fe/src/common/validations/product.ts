import Joi from "joi";

export const ProductJoiSchema = Joi.object({
    name_product: Joi.string().required(),
    price_product: Joi.number().required(),
    //category: Joi.string(),
    //gallery: Joi.array().items(Joi.string()),
    image_product: Joi.string(),
    description_product: Joi.string(),
    quantity_product: Joi.number(),
    featured_product: Joi.boolean(),
    countInStock_product: Joi.number(),
});
