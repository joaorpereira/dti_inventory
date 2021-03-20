import { Request, Response } from 'express'
import ProductsViews from '../views/ProductsViews'

class ProductsController {
  async getProducts(req: Request, res: Response): Promise<any> {
    try {
      const products = await ProductsViews.getProducts()
      res.status(200).send(products)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
}

export default new ProductsController()
