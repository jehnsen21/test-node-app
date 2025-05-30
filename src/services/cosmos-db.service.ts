// src/services/cosmosDb.service.ts
import { CosmosClient, Container, ItemDefinition, SqlParameter } from "@azure/cosmos";
import { BaseModel } from "../models/base.model";
import { config } from "../config/cosmos.config";
import { ZodSchema } from "zod";
import { ServiceResult } from "../interfaces/response.types";
import logger from "../utils/logger";


export class CosmosDbService<T extends BaseModel> {
  private container: Container;
  private schema: ZodSchema<T>;

  constructor(databaseId: string, containerId: string, schema: ZodSchema<T>) {
    const client = new CosmosClient({
      endpoint: config.endpoint,
      key: config.key,
    });

    this.container = client.database(databaseId).container(containerId);
    this.schema = schema;
  }

  async create<T extends ItemDefinition>(item: T): Promise<T> {

    try {
      const result = this.schema.safeParse(item)
      if (!result.success) {
        throw new Error(`Validation failed: ${result.error.issues}`);
      }

      const { resource } = await this.container.items.create(item);
      return resource as T;
    } catch (err: unknown) {
      logger.error(`Cosmos DB failed ${err instanceof Error ? err.message : String(err)}`);
      return this.error<T>(null).result as T;
    }
  }

  async get(id: string, partitionKey: string): Promise<T | null> {
    try {
      const { resource } = await this.container.item(id, partitionKey).read<T>();
      return resource ?? null;
    } catch(err: unknown) {
      logger.error(`Cosmos DB failed ${err instanceof Error ? err.message : String(err)}`);
      return null;
    }
  }

  async update(id: string, partitionKey: string, item: T): Promise<T> {
    const { resource } = await this.container
      .item(id, partitionKey)
      .replace<T>(item);
    return resource as T;
  }

  async delete(id: string, partitionKey: string): Promise<void> {
    await this.container.item(id, partitionKey).delete();
  }

  async list(): Promise<ServiceResult<T[]>> {
    try {
       const query = this.container.items.query<T>("SELECT * FROM c");
    const { resources } = await query.fetchAll();
    return this.ok(resources);
    } catch (error) {
      return this.error<T[]>([]);
    }
  }

  async query<T extends ItemDefinition>(
		query: string,
		parameters: SqlParameter[] = []
	): Promise<ServiceResult<T[]>> {
		try {
			const { resources } = await this.container.items.query({ query, parameters }).fetchAll();
			return this.ok(resources);
		} catch (err: unknown) {
			return this.error<T[]>([]);
		}
	}

  // Result helpers
	ok<T>(result: T | null): ServiceResult<T> {
		return { result, status: "Ok" };
	}
	notFound<T>(result: T | null): ServiceResult<T> {
		return { result, status: "NotFound" };
	}
	error<T>(result: T | null): ServiceResult<T> {
		return { result, status: "Error" };
	}
}
