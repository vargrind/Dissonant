
/**
 * Bot-wide permission flags
 */
export enum DissonantServicePermissions {
  /// Un/install and update Chords. This is a **very** dangerous permission to give.
  Installer = (1 << 0),
  /// Ask the bot to reboot itself
  Reload = (1 << 1),
  /// Access bot logs
  Logs = (1 << 2),
  /// Freely read **any** bot information, with the rare exceptions of
  /// authentication tokens, database credentials, and similar.
  /// This includes Chords loaded, Chord storage, effective permissions of others,
  /// and more.
  /// Having this also allows viewing all guilds.
  /// This is a very dangerous permission to give.
  /// Chords can opt to deny read to their own data in some cases.
  Introspection = (1 << 3),
  /// Read status output, like load, servers joined, etc
  Status = (1 << 4)
}
/**
 * Guild-wide permission flags
 */
export enum DissonantGuildPermissions {
  /// Load / Unload Chords
  Loader = (1 << 0),
  /// Entirely enable/disable the bot
  Killswitch = (1 << 1),
  /// Freely read any guild-specific bot information,
  /// including Chord data and other things.
  /// Chords can opt to deny read to their own data in some cases.
  Introspection = (1 << 2),
  /// Read status output, like load, members loaded, etc
  Status = (1 << 3),
  /// Full administrative access / permissions, regardless of modules
  Administrator = (1 << 4)
}
