import { Chord } from "../Chord";

/**
 * Chat command interactions
 */
export class ChatCommandInteraction {
  /// the chord we are originating from
  public readonly chord: Chord;

  constructor(chord: Chord) {
    this.chord = chord;
  }
}
