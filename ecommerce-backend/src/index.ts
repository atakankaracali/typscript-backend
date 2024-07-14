import "reflect-metadata";
import { AppDataSource } from "./data-source";
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();

AppDataSource.initialize().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}).catch(error => console.log(error));
