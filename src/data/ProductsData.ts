import DataBase from '../database/DataBase'
import { Product } from '../models/ProductsModels'

class ProductsData extends DataBase {
  private tableName: string = 'products'

  async getProducts(): Promise<Product[]> {
    try {
      const response = await DataBase.connection.raw(
        `SELECT * FROM ${this.tableName};`
      )
      return response[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

export default new ProductsData()
