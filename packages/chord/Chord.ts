import { Adapter } from './Adapter'
import { Context } from './Context';
import { DissonantChordID } from "../types/Ids";
import { DissonantChordInterface, DissonantChordVersion } from '../types/Chords';
import { Schematic } from './Schematic';
import { Registration } from './Registration';

/**
 * The root class for chords. All chords should inherit from this.
 * This is where the base definitions for everything, and the Dissonant adapter lives.
 */
export abstract class Chord{
  /// Adapter
  protected adapter: Adapter;
  /// Context
  protected context: Context;
  /// Schematic
  protected schematic: Schematic;
  /// ID
  protected id: DissonantChordID;
  /// Registration
  protected registration: Registration;

  
  public override __API_VERSION(): DissonantChordVersion {
    return 1;
  }

  public override abstract registration() :

  constructor (id: DissonantChordID, adapter: Adapter, context: Context, schematic: Schematic) {
    super();
    this.id = id;
    this.adapter = adapter;
    this.context = context;
    this.schematic = schematic;
    this.registration = this.registration();
  }
}
