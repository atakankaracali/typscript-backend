import "reflect-metadata";
import { DataSource } from "typeorm";
import express from "express";
import productRoutes from "./routers/ProductRouters";
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: ["dist/models/**/*.js"]
});

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(error => console.log(error));
