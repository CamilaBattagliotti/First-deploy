import { NextFunction, Request, Response } from "express";
import AuthService from "../services/auth";

class AuthController {
  static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.register(req.body);
      res.status(201).json({ message: "Usuario registrado", token: token });
    } catch (error) {
      next(error); // Con la fx next mandamos el error al mw que se dedica a manejar los errores (el mw handler de errores que tiene 4 parametros )
    }
  }
  static async logIn(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await AuthService.logIn(req.body);
      res.status(200).json({ message: "Bienvenido", token: token });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
