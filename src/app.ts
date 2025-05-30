import express from "express";
import 'dotenv/config';
import productRoute from "./routes/productRoute";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();
app.use(express.json());
app.use("/api/product", productRoute);

export default app;

