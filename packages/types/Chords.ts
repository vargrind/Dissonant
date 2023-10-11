import { Chord } from "../chord/Chord";
import { Registration } from "../chord/Registration";
import { Registration } from "../chord/Registration";
import { Schematic} from "../chord/Schematic";
import { DissonantChordID } from "./Ids";
import { DissonantType } from "./Types";

/// typedef for chord version
export type DissonantChordVersion = {
  major: number,
  minor: number,
  patch: number,
};

/**
 * This is what module.exports needs to be on a chord file for it to load.
 */
export interface DissonantChordExport {
  /// our chord ID
  id: DissonantChordID;
  /// our schematic
  schematic: Schematic;
  /// The actual chord type; this is what will be instanced when we load it.
  chord: DissonantType<Chord>;
}
