import postgres from "postgres";

export interface DatabaseConfig {
  // url
  url: string;
  // user
  user: string;
  // password
  password: string;
  // database name
  database: string;
}

export class Database {
  private config: DatabaseConfig;
  private connection: any;

  constructor(config: DatabaseConfig) {
    this.config = config;
    
  }
}
