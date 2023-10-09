/// From Angular.js
export interface DissonantType<T> extends Function { new (...args: any[]): T; }
/// Lgoging levels
export enum DissonantLogLevel {
  Fatal = 1,
  Error = 2,
  Warning = 3,
  Info = 4,
  Trace = 5,
}
