import { Database, DatabaseConfig } from "./database";
import { Configuration } from "./configuration";
import { Logger } from "./logger";

export class Bot {
  config: Configuration;
  database: Database;
  logger: Logger;

  constructor(config: Configuration, logger: Logger, database: Database) {
    this.config = config;
    this.database = database;
    this.logger = logger;
  }
}
