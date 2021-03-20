import ProductsData from '../data/ProductsData'
import { Product } from '../models/ProductsModels'
import HashManager from '../middlewares/generateID'

class ProductsViews {
  async getProducts(): Promise<Product[]> {
    let message = 'Product list not found'
    let statusCode
    try {
      const products = await ProductsData.getProducts()

      if (!products) {
        statusCode = 400
        throw new Error(message)
      }
      return products
    } catch (error) {
      throw new Error(error)
    }
  }

  async getProduct(id : string): Promise<Product[]> {
    let message = 'Product not found'
    let statusCode
    try {
      const product = await ProductsData.getProduct(id)

      if (!product) {
        statusCode = 400
        throw new Error(message)
      }
      return product
    } catch (error) {
      throw new Error(error)
    }
  }

  async create(name: string, quantity: number, price: number): Promise<string> {
    let message = 'Account balance not found'
    let statusCode

    try {
      if (!name || !quantity || !price) {
        statusCode = 406
        message = 'Nome, quantidade e preço são campos obrigatórios'
        throw new Error(message)
      }

      const id = HashManager.generateId()
      await ProductsData.create(id, name, quantity, price)
      message = 'Product created'
      return message
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default new ProductsViews()
