"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./data-source");
const app_1 = __importDefault(require("./app"));
data_source_1.AppDataSource.initialize().then(() => {
    app_1.default.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(error => console.log(error));
