import { Router } from "express";
import authRouter from "./auth";
import productsRouter from "./products";

const indexRouter = Router();

indexRouter.use("/auth", authRouter);
indexRouter.use("/products", productsRouter);

export default indexRouter;
