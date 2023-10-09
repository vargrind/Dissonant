import { CHORD_VERSION, type ChordVersion } from './Version'
import { AdapterV1 } from './Adapter'
import { DefaultRegistration, Registration } from './Registration';
import { ContextV1 } from './Context';
import { DissonantChordID } from "../types/Ids";

/**
 * The root class for chords. All chords should inherit from this.
 * This is where the base definitions for everything, and the Dissonant adapter lives.
 */
export class Chord {
  /// Adapter
  protected adapter: AdapterV1;
  /// Context
  protected context: ContextV1;
  /// ID
  protected id: DissonantChordID;

  //* Integration *//

  /**
   * Gets our version.
   */
  public chordVersion (): ChordVersion {
    return CHORD_VERSION
  }

  constructor (id: DissonantChordID, adapter: AdapterV1, context: ContextV1) {
    this.id = id;
    this.adapter = adapter;
    this.context = context;
  }
}
