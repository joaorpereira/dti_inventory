import express from 'express'
import productsController from '../controllers/ProductsController'

const router = express.Router()

router.get('/', productsController.getProducts)
router.post('/', productsController.create)
router.get('/:id', productsController.getProduct)
router.put('/:id', productsController.update)
router.delete('/:id', productsController.delete)

export default router