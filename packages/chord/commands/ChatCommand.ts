import { Type } from "../../types/Types";
import { ChatCommandBuilder } from "./ChatCommandBuilder";
import { ChatCommandHandler } from "./ChatCommandHandler";

/**
 * Registration interface for Chat Commands
 */
export interface ChatCommand {
  /// our display name - must be unique per chord
  name: string;
  /// descrption
  desc: string;
  /// our ChatCommandBuilder instance
  builder: ChatCommandBuilder;
  /// handler type
  handler: Type<ChatCommandHandler>;
}

/**
 * Parameters for chat commands
 */
export interface ChatCommandParam {
  /// lowertext only, name
  name: string;
  /// parameter type
  type: ChatCommandType;
}

/**
 * Parameter types for chat commands
 */
export type ChatCommandType = ChatCommandStringParam | ChatCommandNumberParam;

export type ChatCommandStringParam = {
  type: "string",
  minLength: number | null,
  maxLength: number | null,
}

export type ChatCommandNumberParam = {
  type: "number",
  round: number | null,
  integer: boolean | null,
  minValue: number | null,
  maxValue: number | null,
}

/**
 * Return values for handler execution
 */
export enum ChatCommandStatus {
  Ok = 0,
  Error = 1,
}

