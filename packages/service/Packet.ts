import { DissonantShardID } from "../types/Ids";
import { DissonantLogLevel } from "../types/Types";

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
  /// Controller or worker does not recognize us as a peer; this is considered orphaned-state
  Orphaned = 4,
}

/**
 * Service plane packet
 */
export interface DissonantServicePacket {
  payload: any;
}
export interface DissonantServiceUpstreamPacket extends DissonantServicePacket {
  payload: DissonantServiceUpstreamPayload;
}

export interface DissonantServiceDownstreamPacket extends DissonantServicePacket {
  payload: DissonantServiceDownstreamPayload
}

/**
 * Service plane payloads, controller --> worker
 */
export type DissonantServiceDownstreamPayload =
  DissonantServiceDownstreamHeartbeat;

/**
 * Service plane payloads, worker --> controller
 */
export type DissonantServiceUpstreamPayload =
  DissonantServiceUpstreamLog;

//* Downstream *//

/**
 * Heartbeat transmitted from controller
 */
export interface DissonantServiceDownstreamHeartbeat {
  type: "ping",
}

//* Upstream *//

/**
 * Logging packet transmitted to controller on service plane
 */
export interface DissonantServiceUpstreamLog {
  type: "worker-log",
  shard: DissonantShardID;
  level: DissonantLogLevel;
}

