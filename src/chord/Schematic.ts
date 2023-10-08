/**
 * A Chord's Schematic is loaded from its chord.json.
 *
 * This must be in sync with chord.schema.json
 */
export interface Schematic {
  // name of the chord
  name: string
  // description of the chord
  desc: string
  // list of author names; conventionally, this is GitHub usernames.
  author: string[]
  // a link to the GitHub repository; this is required for automatic update support.
  github: string
  // current version
  version: string
}
