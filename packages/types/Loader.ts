import { Chord } from "../chord/Chord";

export enum DissonantLoadStatus {
  /// version mismatch
  Mismatch = 0,
  /// Correctly loaded
  Loaded = 1,
  /// Can't find all required elements in chord
  Malformed = 2,
}

export type DissonantLoadResults = {
  status: DissonantLoadStatus;
  chord: Chord | null;
}

