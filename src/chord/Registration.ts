import { IntentsBitField, Snowflake } from "discord.js";

/**
 * Description WIP
 *
 * * All functions passed in must be bound to the Chord.
 */
export interface Registration {
  /// Function to call right after loading
  onLoad?: () => void;
  /// Function to call right before unloading
  onUnload?: () => void;
  /// Intents this Chord require.
  /// You should not add more intents than you strictly need for a Chord to function,
  /// as this increases global overhead on the bot.
  requiredIntents: IntentsBitField;
  /// Forbid all introspection - **Turn this on if your Chord operates with sensitive data.**
  forbidIntrospection?: boolean;
  /// Function to call when we are deactivated on a guild
  guildUnload?: (guildID: Snowflake) => void;
  /// Function to call when we are activated on a guild
  guildLoad?: (guildID: Snowflake) => void;
}

export const DefaultRegistration = () => {
  return {
    requiredIntents: new IntentsBitField(),
  }
}
