import { IntentsBitField, Message, Snowflake } from "discord.js";

/**
 * Description WIP
 *
 * * All functions passed in must be bound to the Chord.
 */
export interface Registration extends Registration{
  /// Function to call right after loading
  onLoad?: () => void;
  /// Function to call right before unloading
  onUnload?: () => void;
  /// Function to call when we are disabled on a guild
  guildUnload?: (guildID: Snowflake) => void;
  /// Function to call when we are enabled on a guild
  guildLoad?: (guildID: Snowflake) => void;
}

export interface Registration{}
