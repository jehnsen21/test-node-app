import { CosmosDbService } from "./cosmos-db.service";
import { Product, ProductSchema } from "../models/product.model";
import { ServiceResult } from "../interfaces/response.types";

const containerId = 'Products';
const databaseId = process.env.AZURE_COSMOS_DATABASE_NAME;

export class ProductService extends CosmosDbService<Product> {
  constructor() {
    super(databaseId as string, containerId as string, ProductSchema);
  }

  async getByCategory(categoryId: string): Promise<ServiceResult<Product[]>> {
    try {
      const query = "SELECT * FROM c WHERE c.categoryId = @model";
    const parameters = [{ name: "@model", value: categoryId }];
    const result = await this.query<Product>(query, parameters);
    return result.result && result.result.length > 0
      ? this.ok(result.result)
      : this.notFound<Product[]>(null);
    } catch (error) {
      return this.error<Product[]>([]);
    }
  }
}