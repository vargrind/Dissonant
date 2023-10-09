import { IntentsBitField } from "discord.js";

/**
 * The Context interface for Dissonant's provided data.
 *
 * * The Dissonant bot core provides this to Chords to give them data on the bot.
 * * The Context must be backwards-compatible within the same Dissonant major version.
 * * The Context must be assumed to be able to change at any time. Do not internally cache values.
 */
export interface ContextV1 {
  /// Current intent set of the bot
  intents: IntentsBitField;
  /// Is the bot set to automatically expand intents based on what chords are installed?
  /// If FALSE, the receiving Chord should assume that this will not expand based on its whims.
  strictIntents: boolean;
  /// Our shard number
  shardNumber: number;
}
