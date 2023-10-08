import { Snowflake } from "discord.js";
import { DissonantEntityID } from "../types";

/**
 * The Adapter interface for Dissonant's provided services and modules.
 *
 * * A Chord's Dissonant adapter provides all bot functions, like database storage and Discord services.
 * * The Adapter must be backwards-compatible within the same Dissonant major version.
 */
export interface AdapterV1 {
  /// This provides a simple, string key-value like storage system for chords at the bot, guild, and user levels.
  KVStore: {
    getGlobal(): (key: string) => Promise<string>;
    setGlobal(): (key: string, value: string) => void;
    getGuild(): (guild: Snowflake, key: string) => Promise<string>;
    setGuild(): (guild: Snowflake, key: string, value: string) => void;
    getUser(): (user: Snowflake, key: string) => Promise<string>;
    setUser(): (user: Snowflake, key: string, value: string) => void;
  }

  /// This provides a JSON key-value like storage system for chords at the bot, guild, and user levels.
  JSONStore: {
    getGlobal(): (key: string) => Promise<Object>;
    setGlobal(): (key: string, value: Object) => void;
    getGuild(): (guild: Snowflake, key: string) => Promise<Object>;
    setGuild(): (guild: Snowflake, key: string, value: Object) => void;
    getUser(): (user: Snowflake, key: string) => Promise<Object>;
    setUser(): (user: Snowflake, key: string, value: Object) => void;
  }

  /// This provides a JSON document store for chords at the bot, guild, and user levels.
  EntityStore: {
    getGlobal<T>(): (key: DissonantEntityID) => Promise<T>;
    putGlobal<T>(): (entity: T) => void;
    updateGlobal<T>(): (key: DissonantEntityID, entity: T) => void;
    getGuild<T>(): (guild: Snowflake, key: DissonantEntityID) => Promise<T>;
    putGuild<T>(): (guild: Snowflake, entity: T) => void;
    updateGuild<T>(): (guild: Snowflake, key: DissonantEntityID, entity: T) => void;
    getUser<T>(): (user: Snowflake, key: DissonantEntityID) => Promise<T>;
    putUser<T>(): (user: Snowflake, entity: T) => void;
    updateUser<T>(): (user: Snowflake, key: DissonantEntityID, entity: T) => void;
  }
}
