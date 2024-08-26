import UsersModel from "../models/users";
import { v4 as uuidv4 } from "uuid";

class UsersService {
  static async create(data: { name: string; email: string }) {
    try {
      const usersDb = await UsersModel.read();
      const id = uuidv4();
      usersDb.users.push({ name: data.name, email: data.email, id: id });
      UsersModel.write(usersDb);
      // El servicio retorna el id para que lo pueda usar el servicio de autenticacion para crear en la db de auth el nuevo usuario con ese id (asi vincular ambas db)
      return id;
    } catch (error) {
      throw error;
    }
  }

  static async read() {
    try {
      const db = await UsersModel.read();
      return db;
    } catch (error) {
      throw error;
    }
  }

  static async getByEmail(email: string) {
    try {
      const db = await UsersService.read();
      const user = db.users.find((user) => user.email == email);
      if (!user) throw new Error("Usuario no encontrado");
      return user;
    } catch (error) {
      throw error;
    }
  }
}

export default UsersService;
