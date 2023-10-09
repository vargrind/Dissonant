import { DissonantShardID } from "./Ids";
import { DissonantLogLevel } from "./Types";

/**
 * Service plane handling result
 */
export enum DissonantServiceStatus {
  /// handled as instructed
  Ok = 0,
  /// error during handling
  Error = 1,
  /// auth error
  /// this should never happen, and is considered a fatal crash
  /// for worker processes; for the controller, it should assume
  /// a worker returning this is a 'zombie'.
  Forbidden = 2,
  /// unrecognized command
  Unrecognized = 3,
}

/**
 * Service plane packet
 */
export interface DissonantServicePacket {
  payload: DissonantServicePayload;
}

/**
 * Service plane payloads
 */
export type DissonantServicePayload =
    DissonantServiceLog
  | DissonantServiceHeartbeat;

/**
 * Heartbeat transmitted from controller
 */
export interface DissonantServiceHeartbeat {
  type: "ping",
}

/**
 * Logging packet transmitted to controller on service plane
 */
export interface DissonantServiceLog {
  type: "worker-log",
  shard: DissonantShardID;
  level: DissonantLogLevel;
}

