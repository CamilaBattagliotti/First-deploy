import { NextFunction, Request, Response, Router } from "express";

import ProductsController from "../controllers/products";

const productsRouter = Router();

productsRouter.get("/", (req: Request, res: Response, next: NextFunction) => {
  ProductsController.getAllProducts(req, res, next);
});
productsRouter.get("/:id");

productsRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  ProductsController.create(req, res, next);
});
productsRouter.patch(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    ProductsController.update(req, res, next);
  }
);
productsRouter.delete(
  "/:id",
  (req: Request, res: Response, next: NextFunction) => {
    ProductsController.deleteProduct(req, res, next);
  }
);

export default productsRouter;
