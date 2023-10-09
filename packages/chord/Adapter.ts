import { Client, Snowflake } from "discord.js";
import { DissonantEntityID } from "../types/Ids";

/**
 * The Adapter interface for Dissonant's provided services and modules.
 *
 * * A Chord's Dissonant adapter provides all bot functions, like database storage and Discord services.
 * * The Adapter must be backwards-compatible within the same Dissonant version.
 * * Do not manually cache the adapter - the bot core reserves the right to replace it at any time.
 */
export interface AdapterV1 {
  /// A direct reference to the Discord.js client. This lets you directly act as the bot - this should only be for advanced use-cases.
  //
  //  todo: wrap this in something for safety
  Discord: Client;

  // todo: get rid of below interfaces

  /// This provides a simple, string key-value like storage system for chords at the bot, guild, and user levels.
  KVStore: {
    getGlobal(): (key: string) => Promise<string | null>;
    setGlobal(): (key: string, value: string | null) => void;
    queryGlobal(): () => AsyncIterable<[string, string]>;
    getGuild(): (guildID: Snowflake, key: string) => Promise<string | null>;
    setGuild(): (guildID: Snowflake, key: string, value: string | null) => void;
    queryGuild(): (guildID: Snowflake) => AsyncIterable<[string, string]>;
    getGuildUser(): (guildID: Snowflake, userID: Snowflake, key: string) => Promise<string> | null;
    setGuildUser(): (guildID: Snowflake, userID: Snowflake, key: string, value: string | null) => void;
    queryGuildUser(): (guildID: Snowflake, userID: Snowflake) => AsyncIterable<[string, string]>;
    getUser(): (userID: Snowflake, key: string) => Promise<string> | null;
    setUser(): (userID: Snowflake, key: string, value: string | null) => void;
    queryUser(): (userID: Snowflake) => AsyncIterable<[string, string]>;
  }

  /// This provides a JSON key-value like storage system for chords at the bot, guild, and user levels.
  ObjectStore: {
    getGlobal<T>(): (key: string) => Promise<T>;
    setGlobal(): (key: string, value: Object) => void;
    deleteGlobal(): (key: string) => void;
    queryGlobal<T>(): () => AsyncIterable<[string, T]>;
    getGuild<T>(): (guildID: Snowflake, key: string) => Promise<T>;
    setGuild(): (guildID: Snowflake, key: string, value: Object) => void;
    deleteGuild(): (guildID: Snowflake, key: string) => void;
    queryGuild<T>(): (guildID: Snowflake) => AsyncIterable<[string, T]>;
    getGuildUser<T>(): (guildID: Snowflake, userID: Snowflake, key: string) => Promise<T>;
    setGuildUser(): (guildID: Snowflake, userID: Snowflake, key: string, value: Object) => void;
    deleteGuildUser(): (guildID: Snowflake, userID: Snowflake, key: string) => void;
    queryGuildUser<T>(): (guildID: Snowflake, userID: Snowflake) => AsyncIterable<[string, T]>;
    getUser<T>(): (userID: Snowflake, key: string) => Promise<T>;
    setUser(): (userID: Snowflake, key: string, value: Object) => void;
    deleteUser(): (userID: Snowflake, key: string) => void;
    queryUser<T>(): (userID: Snowflake) => AsyncIterable<[string, T]>;
  }

  /// This provides a JSON document store for chords at the bot, guild, and user levels.
  /// Unlike ObjectStore, this is meant for arbitrary insert/deletes without worrying about getting an ID yourself.
  /// This is useful for things like ticket tools.
  EntityStore: {
    getGlobal<T>(): (id: DissonantEntityID) => Promise<T>;
    updateGlobal(): (id: DissonantEntityID, value: Object) => void;
    putGlobal(): (value: Object) => Promise<DissonantEntityID>;
    deleteGlobal(): (id: DissonantEntityID) => void;
    queryGlobal<T>(): () => AsyncIterable<[string, T]>;
    purgeGlobal(): () => void;
    getGuild<T>(): (guildID: Snowflake, id: DissonantEntityID) => Promise<T>;
    updateGuild(): (guildID: Snowflake, id: DissonantEntityID, value: Object) => void;
    putGuild(): (guildID: Snowflake, value: Object) => Promise<DissonantEntityID>;
    deleteGuild(): (guildID: Snowflake, id: DissonantEntityID) => void;
    queryGuild<T>(guildID: Snowflake): () => AsyncIterable<[string, T]>;
    purgeGuild(): (guildID: Snowflake) => void;
    getGuildUser<T>(): (guildID: Snowflake, userID: Snowflake, id: DissonantEntityID) => Promise<T>;
    updateGuildUser(): (guildID: Snowflake, userID: Snowflake, id: DissonantEntityID, value: Object) => void;
    putGuildUser(): (guildID: Snowflake, userID: Snowflake, value: Object) => Promise<DissonantEntityID>;
    deleteGuildUser(): (guildID: Snowflake, userID: Snowflake, id: DissonantEntityID) => void;
    queryGuildUser<T>(): (guildID: Snowflake, userID: Snowflake) => AsyncIterable<[string, T]>;
    purgeGuildUser(): (guildID: Snowflake, userID: Snowflake) => void;
    getUser<T>(): (userID: Snowflake, id: DissonantEntityID) => Promise<T>;
    updateUser(): (userID: Snowflake, id: DissonantEntityID, value: Object) => void;
    putUser(): (userID: Snowflake, value: object) => Promise<DissonantEntityID>;
    deleteUser(): (userID: Snowflake, id: DissonantEntityID) => void;
    queryUser<T>(): (userID: Snowflake) => AsyncIterable<[string, T]>;
    purgeUser(): (userID: Snowflake) => void;
  }

}
