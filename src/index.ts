import express, { Express } from 'express'
import { AddressInfo } from 'net'
import cors from 'cors'
import dotenv from 'dotenv'

import productsRoutes from './routes/ProductsRoutes'

dotenv.config()

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use('/products', productsRoutes)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Serving running in http://localhost: ${address.port}`)
  } else {
    console.error(`Failure starting server`)
  }
})
