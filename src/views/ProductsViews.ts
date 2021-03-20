import ProductsData from '../data/ProductsData'
import { Product } from '../models/ProductsModels'

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
}

export default new ProductsViews()
