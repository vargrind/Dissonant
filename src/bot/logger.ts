export enum LoggerVerbosity {
  FATAL = 1,
  ERROR = 2,
  WARN = 3,
  INFO = 4,
  DEBUG = 5,
}

export interface Logger {
  getVerbosity: () => number;
  setVerbosity: (verbosity: LoggerVerbosity) => void;
  log: (msg: string, verbosity: LoggerVerbosity) => void;
}

export class ConsoleLogger implements Logger {
  verbosity: LoggerVerbosity;

  constructor(verbosity: LoggerVerbosity) {
    this.verbosity = verbosity;
  }

  getVerbosity() {
    return this.verbosity;
  }

  setVerbosity(verbosity: LoggerVerbosity) {
    this.verbosity = verbosity;
  }

  log(msg: string, verbosity: LoggerVerbosity) {
    if(verbosity > this.verbosity) {
      return;
    }
    console.log(`${(new Date()).toJSON()} ${msg}`)
  }
}

