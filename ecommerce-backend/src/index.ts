import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import productRoutes from "./routers/ProductRouters";

const app = express();

app.use(express.json());
app.use("/products", productRoutes);

createConnection().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}).catch(error => console.log(error));
