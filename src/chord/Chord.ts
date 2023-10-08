import { DISSONANT_VERSION, type DissonantVersion } from '../version'
import { AdapterV1 } from './Adapter'
import { DefaultRegistration, Registration } from './Registration';
import { ContextV1 } from './Context';
import { DissonantChordID } from '../types';

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
  public dissonantVersion (): DissonantVersion {
    return DISSONANT_VERSION
  }

  constructor (id: DissonantChordID, adapter: AdapterV1, context: ContextV1) {
    this.adapter = adapter;
    this.context = context;
    this.id = id;
  }

  /**
   * Constructs our Registration.
   */
  public build (): Registration {
    return DefaultRegistration();
  }
}
