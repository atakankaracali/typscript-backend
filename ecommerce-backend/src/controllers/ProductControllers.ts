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
    const { id } = req.params;
    const productRepository = getRepository(Product);
    try {
      const product = await productRepository.findOneOrFail({ where: { id: parseInt(id) } });
      res.send(product);
    } catch (error) {
      res.status(404).send("Product not found");
    }
  };

  static create = async (req: Request, res: Response) => {
    const { name, description, price, inventory } = req.body;
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.inventory = inventory;

    const productRepository = getRepository(Product);
    try {
      await productRepository.save(product);
      res.status(201).send("Product created");
    } catch (error) {
      res.status(500).send("Error creating product");
    }
  };

  static update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, description, price, inventory } = req.body;
    const productRepository = getRepository(Product);
    try {
      const product = await productRepository.findOneOrFail({ where: { id: parseInt(id) } });
      product.name = name;
      product.description = description;
      product.price = price;
      product.inventory = inventory;
      await productRepository.save(product);
      res.send("Product updated");
    } catch (error) {
      res.status(404).send("Product not found");
    }
  };

  static delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    const productRepository = getRepository(Product);
    try {
      await productRepository.findOneOrFail({ where: { id: parseInt(id) } });
      await productRepository.delete(id);
      res.send("Product deleted");
    } catch (error) {
      res.status(404).send("Product not found");
    }
  };
}
