"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express_1 = __importDefault(require("express"));
const ProductRouters_1 = __importDefault(require("./routers/ProductRouters"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/products", ProductRouters_1.default);
(0, typeorm_1.createConnection)().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(error => console.log(error));
