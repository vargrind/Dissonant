import { Channel, Client, Guild, Snowflake, User } from "discord.js";
import { DissonantEntityID } from "../types/Ids";

/**
 * The Adapter interface for Dissonant's provided services and modules.
 *
 * * A Chord's Dissonant adapter provides all bot functions, like database storage and Discord services.
 * * The Adapter must be backwards-compatible within the same Dissonant version.
 * * Do not manually cache the adapter - the bot core reserves the right to replace it at any time.
 */
export interface AdapterV1 {
  // todo: way to do filesystem ops
  // todo: way to do terminal commands
  // todo: chord interop
  // todo: any form of sandboxing whatsoever

  //* Discord - Fetch

  /// Fetch an user from the client
  fetchUser: (id: Snowflake) => Promise<User>;
  /// Fetch a channel from the client; only works if we're enabled on a guild
  fetchChannel: (id: Snowflake) => Promise<Channel>;
  /// Fetch a guild from the client; only works if we're enabled on a guild
  fetchGuild: (id: Snowflake) => Promise<Guild>;

  //* Discord - Iterate
  /// Get all guilds with chord enabled
  guildIterator: () => Promise<AsyncIterable<Guild>>;
  /// Get all channels in guild that has us enabled
  channelIterator: (guildID: Snowflake) => Promise<AsyncIterable<Guild>>;

  //* Low Level - Do not use unless necessary *//

  /// A direct reference to the Discord.js client. This lets you directly act as the bot - this should only be for advanced use-cases.
  ///
  /// * todo: wrap this in something for safety
  Discord: Client;
  ///

}
