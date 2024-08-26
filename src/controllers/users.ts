import { NextFunction, Request, Response } from "express";
import UsersService from "../services/users";

class UsersController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      await UsersService.create(req.body);
    } catch (error) {
      next(error);
    }
  }
}

export default UsersController;
