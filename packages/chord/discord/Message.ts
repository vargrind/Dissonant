
export type DissonantMessage = {
  messageID: string;
  /// user ID of sender
  senderID: string;
  //* Message Content Intent Below *//
  /// do we have message content loaded? the bot requires message content intent if so
  contentAvailable: boolean;
}
