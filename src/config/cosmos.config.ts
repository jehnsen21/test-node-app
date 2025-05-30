import 'dotenv/config';
// src/config/cosmos.config.ts
export const config = {
  endpoint: process.env.AZURE_COSMOS_ENDPOINT,
  key: process.env.AZURE_COSMOS_KEY
};
