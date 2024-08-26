import { NextFunction, Request, Response } from "express";
import ProductsService from "../services/products";

class ProductsController {
  static async getAllProducts(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.getAllProducts();
    } catch (error) {
      next(error);
    }
  }
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.create(req.body);
    } catch (error) {
      next(error);
    }
  }
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.update(req.params.id, req.body);
    } catch (error) {
      next(error);
    }
  }
  static async deleteProduct(req: Request, res: Response, next: NextFunction) {
    try {
      await ProductsService.deleteProduct(req.params.id);
    } catch (error) {
      next(error);
    }
  }
}

export default ProductsController;
