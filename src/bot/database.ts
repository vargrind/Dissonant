import { Client } from 'pg'

export interface Database {

}

export interface DatabaseConfig {
  // url
  url: string
  // port
  port: number
  // user
  user: string
  // password
  password: string
  // database name
  database: string
}

export class Database {
  private readonly config: DatabaseConfig
  private readonly connection: any

  constructor (config: DatabaseConfig) {
    this.config = config
    this.connection = new Client({
      host: config.url,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password
    })
  }
}
