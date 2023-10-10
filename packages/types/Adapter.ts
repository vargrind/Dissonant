/**
 * Rejection values for Adapter promises.
 */
export enum DissonantAdapterError {
  /// lost connection to controller / adapter / both
  Orphaned = 0,
  /// lost connection to discord
  Disconnected = 1,
  /// permissions error - not enabled in guild
  GuildForbidden = 2,
  /// permissions error - not enabled bot-wide
  GlobalForbidden = 3,
}
