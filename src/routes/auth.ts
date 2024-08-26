import { NextFunction, Request, Response, Router } from "express";
import AuthController from "../controllers/auth";

const authRouter = Router();

authRouter.post(
  "/register",
  (req: Request, res: Response, next: NextFunction) => {
    AuthController.register(req, res, next);
  }
);
authRouter.post("/login", (req: Request, res: Response, next: NextFunction) => {
  AuthController.logIn(req, res, next);
});

export default authRouter;
