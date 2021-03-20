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

  async getProduct(id: string): Promise<Product[]> {
    try {
      const response = await DataBase.connection.raw(
        `SELECT * FROM ${this.tableName} WHERE id="${id}";`
      )
      return response[0]
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  async create(
    id: string,
    name: string,
    quantity: number,
    price: number
  ): Promise<void> {
    try {
      await DataBase.connection.raw(`
      INSERT INTO ${this.tableName} (id, name, quantity, price) 
      VALUES ( 
        "${id}", 
        "${name}", 
        ${quantity}, 
        ${price}
      );    
    `)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

export default new ProductsData()
