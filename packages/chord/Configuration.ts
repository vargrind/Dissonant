/**
 * Configuration
 */
export class Configuration {
  /// command id --> key bindings
  public commandBindings: Record<string, string>;

  constructor() {
    this.commandBindings = {};
  }
}

