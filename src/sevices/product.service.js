import BaseHttpService from "./base-http.service";

export default class ProductService extends BaseHttpService {
  async getAll() {
    return await this.get("products");
  }

  async delete(id) {
    return await this.delete(id);
  }
}
