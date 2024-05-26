import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from "../models/Product";

export class ProductController {
  static getAll = async (req: Request, res: Response) => {
    const productRepository = getRepository(Product);
    const products = await productRepository.find();
    res.send(products);
  };

  static getOneById = async (req: Request, res: Response) => {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({where: {id: parseInt(req.params.id, 10)}});
    if (!product) {
      res.status(404).send("Product not found");
      return;
    }
    res.send(product);
  };

  static create = async (req: Request, res: Response) => {
    const productRepository = getRepository(Product);
    const product = productRepository.create(req.body);
    await productRepository.save(product);
    res.status(201).send(product);
  };

  static update = async (req: Request, res: Response) => {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({where: {id: parseInt(req.params.id, 10)}});
    if (!product) {
      res.status(404).send("Product not found");
      return;
    }
    productRepository.merge(product, req.body);
    await productRepository.save(product);
    res.send(product);
  };

  static delete = async (req: Request, res: Response) => {
    const productRepository = getRepository(Product);
    const product = await productRepository.findOne({where: {id: parseInt(req.params.id, 10)}});
    if (!product) {
      res.status(404).send("Product not found");
      return;
    }
    await productRepository.remove(product);
    res.status(204).send();
  };
}
