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
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    const product = yield productRepository.findOne({ where: { id: parseInt(req.params.id, 10) } });
    if (!product) {
        res.status(404).send("Product not found");
        return;
    }
    res.send(product);
});
ProductController.create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    const product = productRepository.create(req.body);
    yield productRepository.save(product);
    res.status(201).send(product);
});
ProductController.update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    const product = yield productRepository.findOne({ where: { id: parseInt(req.params.id, 10) } });
    if (!product) {
        res.status(404).send("Product not found");
        return;
    }
    productRepository.merge(product, req.body);
    yield productRepository.save(product);
    res.send(product);
});
ProductController.delete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
    const product = yield productRepository.findOne({ where: { id: parseInt(req.params.id, 10) } });
    if (!product) {
        res.status(404).send("Product not found");
        return;
    }
    yield productRepository.remove(product);
    res.status(204).send();
});
