
export interface Configuration {
  // bot auth token
  token: string;
  // are we a shard? shard number if we are.
  shard: number | undefined;
}
