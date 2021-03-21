import knex from 'knex'
export default class DataBase {
    protected static connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.HOST,
            port: 3306,
            user: process.env.DB_NAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
        }
    })
}