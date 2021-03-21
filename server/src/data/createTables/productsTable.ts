import DataBase from '../../database/DataBase'
class ProductsTable extends DataBase {
  async create(): Promise<void> {
    try {
      await DataBase.connection.raw(`
              CREATE TABLE products(
                  id VARCHAR(255) PRIMARY KEY,
                  name VARCHAR(255) NOT NULL,
                  quantity INT DEFAULT 0,                
                  price FLOAT DEFAULT 0,
                  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
              );
          `)
      console.log('Products table created')
    } catch (error) {
      console.log(error)
    }
  }

  async delete(): Promise<void> {
    try {
      await DataBase.connection.raw(`DROP TABLE products;`)
      console.log('Products table deleted')
    } catch (error) {
      console.log(error)
    }
  }
}

export default new ProductsTable()
