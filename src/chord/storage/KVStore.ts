import { DissonantChordID } from "../../../packages/types/Ids";

/**
 * A database backed key-value store
 *
 * * Keys must be strings.
 * * Values must be a JSON-compatible entity (so string, number, object, etc).
 */
export class KVStore<T> {
  public readonly chordID: DissonantChordID;
  public readonly storeID: string;

  constructor(chordID: DissonantChordID, storeID :string) {
    this.chordID = chordID;
    this.storeID = storeID;
  }
}

// todo
