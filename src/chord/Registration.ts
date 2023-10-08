import { IntentsBitField } from "discord.js";

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
}

export const DefaultRegistration = () => {
  return {
    requiredIntents: new IntentsBitField(),
  }
}
