export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
}

export interface CosmosConfig {
  database: string;
  container: string;
}