import { ChatCommandParam} from "./ChatCommand";

/**
 * Builder class for chat commands
 */
export class ChatCommandBuilder {
  /// name
  private name: string | null;
  /// ordered list of parameters
  private params: ChatCommandParam[];

  constructor () {
    this.name = null;
    this.params = [];
  }

  public String(key: string, minLength: number|null = null, maxLength: number|null = null): this {
    this.params.push({
      name: key,
      type: {
        type: "string",
        minLength: minLength,
        maxLength: maxLength,
      },
    })
    return this;
  }

  public Number(key: string, round: number|null = null, integer: boolean|null = null, minValue: number|null = null, maxValue: number|null = null): this {
    this.params.push({
      name: key,
      type: {
        type: "number",
        round: round,
        integer: integer,
        minValue: minValue,
        maxValue: maxValue,
      },
    })
    return this;
  }
}
