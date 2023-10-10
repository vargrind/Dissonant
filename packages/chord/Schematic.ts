import { IntentsBitField } from "discord.js"

/**
 * A Chord's Schematic is loaded from its chord.json.
 *
 * This must be in sync with chord.schema.json
 */
export interface Schematic {
  metadata: {
    // name of the chord
    name: string;
    // description of the chord
    desc: string;
    // list of author names; conventionally, this is GitHub usernames.
    author: string[];
  }
  repository: {
    // a link to the GitHub repository; this is required for automatic update support.
    github: string;
    // major version
    major: number;
    // minor version
    minor: number;
  }
  directives: {
    // Client intents the Chord requires
    // you should not add more intents than you strictly need for function,
    // as this increases the global overhead of the bot
    requiredIntents: IntentsBitField;
    // forbid introspection - turn this on if any sensitive data is used in chord.
    // this does not prevent log-reading, however! only the internal introspection systems.
    forbidIntrospection: boolean;
  }
}
