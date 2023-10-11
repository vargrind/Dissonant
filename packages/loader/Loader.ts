import { DissonantLoadResults, DissonantLoadStatus } from "../types/Loader";
import { DissonantChordExport } from "../types/Chords";
import { Adapter } from "../chord/Adapter";
import { Context } from "../chord/Context";
import { DISSONANT_VERSION } from "../internal/version";

/**
 * Handles loading Chords,
 * used by both Controller and Workers classes
 */
export class DissonantLoader {

  public load(filepath: string, adapter: Adapter, context: Context): DissonantLoadResults {
    let path = require.resolve(filepath);
    if(require.cache[path] !== undefined) {
      delete require.cache[path];
    }
    let instance: DissonantChordExport = require(path);
    if(!this.validate(instance)){
      return {
        status: DissonantLoadStatus.Malformed,
        chord: null,
      }
    }
    let constructed = new instance.chord(instance.id, adapter, context, instance);
    if(constructed.__API_VERSION().major != DISSONANT_VERSION.major) {
      return {
        status: DissonantLoadStatus.Mismatch,
        chord: null,
      }
    }
    return {
      status: DissonantLoadStatus.Loaded,
      chord: constructed,
    }
  }

  public validate(instance: DissonantChordExport): boolean {

  }
}
