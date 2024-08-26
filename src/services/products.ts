import ProductsModel from "../models/products";

class ProductsService {
  static async getAllProducts() {
    try {
      await ProductsModel.read();
    } catch (error) {
      throw error;
    }
  }
  static async create(product) {
    try {
      await ProductsModel.write("parametro");
    } catch (error) {
      throw error;
    }
  }
  static async update(id, data) {
    try {
      await ProductsModel.write("parametro");
    } catch (error) {
      throw error;
    }
  }
  static async deleteProduct(id) {
    try {
      await ProductsModel.write("parametro");
    } catch (error) {
      throw error;
    }
  }
}

export default ProductsService;
