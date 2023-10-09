import { ChatCommandStatus } from "./ChatCommand";
import { ChatCommandInteraction } from "./ChatCommandInteraction";

/**
 * Core handler type for chat comamnds
 */
export abstract class ChatCommandHandler {
  /// Ran to handle an interaction
  ///
  /// Returns true/false based on if the command was successful.
  public abstract execute(interaction: ChatCommandInteraction): ChatCommandStatus;
}
