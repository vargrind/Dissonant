import { ChordLoader } from "./ChordLoader";

export class ChordManager {
  /// Our loader
  loader: ChordLoader;

  constructor(loader: ChordLoader) {
    this.loader = loader;
  }

}
