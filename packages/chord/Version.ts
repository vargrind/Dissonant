/// Typedef for bot version.
export type ChordVersion = string;
/// The bot version.
/// This is a constant to automatically bundle it with Chord includes.
/// During loads, the bot can check against this to check compatibility.
/// This should match the npm package version.
export const CHORD_VERSION: string = "0.0.1";
