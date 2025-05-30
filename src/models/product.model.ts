import { z } from "zod";
import { BaseModel } from "./base.model";

export const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    categoryId: z.string(),
    category: z.string(),
    price: z.number(),
});

export type Product = z.infer<typeof ProductSchema> & BaseModel;