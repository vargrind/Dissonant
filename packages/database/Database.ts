import { Client, Connection } from "pg";
import { DissonantDatabaseConfig } from "./Config";

export class DissonantDatabase {
  private client: Client;
  private config: DissonantDatabaseConfig;

  constructor(config: DissonantDatabaseConfig) {
    this.config = config;
    DissonantDatabase.assert_database(config);
    this.client = new Client({
      user: config.user,
      password: config.pass,
      host: config.hostname,
      port: config.port,
      database: config.database,
    })
  }

  /**
   * Ensure a database is there based on configured database.
   * If it isn't, make it.
   *
   * @param config The configuration
   */
  private static assert_database(config: DissonantDatabaseConfig) {
    // wip
  }
}
