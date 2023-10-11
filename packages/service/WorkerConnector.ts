import { EventEmitter } from "events";
import { DissonantServiceWorkerConfig } from "./WorkerConfig";

/**
 * Service plane adapter
 */
export class DissonantServiceWorkerConnector extends EventEmitter{
  /// configuration
  private config: DissonantServiceWorkerConfig;

  constructor(config: DissonantServiceWorkerConfig) {
    super();
    this.config = config;
  }
}
