import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/connect";
import Routes_Products from "./routers/products";
import Routes_categories from "./routers/category";
import Routes_auth from "./routers/auth";
import morgan from "morgan";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

connectDB(process.env.DB_URI);

app.use("/api/v1", Routes_Products);
app.use("/api/v1", Routes_categories);
app.use("/api/v1", Routes_auth);
export const viteNodeApp = app;
