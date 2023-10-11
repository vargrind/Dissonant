import { Chord } from "../chord/Chord";
import { DissonantChordID } from "../types/Ids";

/**
 * Handles holding chords
 */
export class DissonantChordManager {
  /// map of id --> chord
  private chords: Record<DissonantChordID, Chord>;

  constructor() {
    this.chords = {};
  }
  
}
