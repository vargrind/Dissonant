import { DissonantShardID } from "../types/Ids";

/**
 * Context - provides server data, shard number, etc
 */
export interface DissonantWorkerContext {
  /// internal shard ID
  shardID: DissonantShardID;
  /// shard ID to give to discord auth
  shard: number;
  /// total shards to give to discord auth
  shardTotal: number;
  /// controller address
  controllerURL: URL;
}
