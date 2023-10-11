/**
 * Database config given to both workers and the controller.
 */
export interface DissonantDatabaseConfig {
  user: string;
  pass: string;
  hostname: string;
  port: number;
  database: string;
}
