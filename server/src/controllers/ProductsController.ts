import { Request, Response } from 'express'
import ProductsViews from '../views/ProductsViews'
import { InputProduct } from '../models/ProductsModels'
class ProductsController {
  async getProducts(req: Request, res: Response): Promise<any> {
    try {
      const products = await ProductsViews.getProducts()
      res.status(200).send(products)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async getProduct(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params
      const products = await ProductsViews.getProduct(id)
      res.status(200).send(products)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const { name, quantity, price }: InputProduct = req.body
      const message = await ProductsViews.create(name, quantity, price)
      res.status(201).send(message)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const { name, quantity, price }: InputProduct = req.body
      const { id } = req.params
      const message = await ProductsViews.update(
        id as string,
        name,
        quantity,
        price
      )
      res.status(201).send(message)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params
      const message = await ProductsViews.delete(id)
      res.status(201).send(message)
    } catch (error) {
      res.status(400).send(error.message)
    }
  }
}

export default new ProductsController()
