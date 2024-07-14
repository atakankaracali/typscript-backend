"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("../models/Product");
class ProductController {
}
exports.ProductController = ProductController;
_a = ProductController;
ProductController.getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    const products = yield productRepository.find();
    res.send(products);
});
ProductController.getOneById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    try {
        const product = yield productRepository.findOneOrFail({ where: { id: parseInt(id) } });
        res.send(product);
    }
    catch (error) {
        res.status(404).send("Product not found");
    }
});
ProductController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, price, inventory } = req.body;
    const product = new Product_1.Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.inventory = inventory;
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    try {
        yield productRepository.save(product);
        res.status(201).send("Product created");
    }
    catch (error) {
        res.status(500).send("Error creating product");
    }
});
ProductController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name, description, price, inventory } = req.body;
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    try {
        const product = yield productRepository.findOneOrFail({ where: { id: parseInt(id) } });
        product.name = name;
        product.description = description;
        product.price = price;
        product.inventory = inventory;
        yield productRepository.save(product);
        res.send("Product updated");
    }
    catch (error) {
        res.status(404).send("Product not found");
    }
});
ProductController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    try {
        yield productRepository.findOneOrFail({ where: { id: parseInt(id) } });
        yield productRepository.delete(id);
        res.send("Product deleted");
    }
    catch (error) {
        res.status(404).send("Product not found");
    }
});
