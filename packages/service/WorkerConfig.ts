/**
 * worker config for service plane
 */
export interface DissonantServiceWorkerConfig {
  /// controller hostname
  host: string;
  /// controller port
  port: number;
  /// numerical id - this is ephemeral
  id: number;
  /// authentication token
  token: string;
}
