import UsersService from "./users";
import { v4 as uuidv4 } from "uuid";
import AuthModel from "../models/auth";
import createHash from "../utils/create-hash";

class AuthService {
  static async register(data: {
    name: string;
    password: string;
    email: string;
  }) {
    try {
      const authDb = await AuthModel.read();
      const token = createHash(uuidv4());
      const userId = await UsersService.create({
        name: data.name,
        email: data.email,
      }); // Esta fx retorna un id.
      const id = uuidv4();
      authDb.auth.push({
        id: id,
        userId: userId,
        password: createHash(data.password),
        token: token,
      });
      await AuthModel.write(authDb);
      return token; // retorno el token para enviarlo al usuario
    } catch (error) {
      throw error;
    }
  }

  static async logIn(data: { email; password }) {
    // Asi estoy tipando data, pero podria pasar solo data por parametro y desestructurarlo dentro de la fx para obtener email y password.
    try {
      const user = await UsersService.getByEmail(data.email);
      const userAuth = await AuthService.getByUserId(user.id);
      if (userAuth.password != createHash(data.password)) {
        throw new Error("Contrasena incorrecta");
      }
      return userAuth.token;
    } catch (error) {
      throw error;
    }
  }

  static async getByUserId(userId: string) {
    try {
      const db = await AuthModel.read();
      const user = db.auth.find((user) => user.userId == userId);
      if (!user) throw new Error("Usuario no encontrado");
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
