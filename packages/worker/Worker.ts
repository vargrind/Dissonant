import { DissonantServicePacket, DissonantServiceStatus } from "../service/Packet";

/**
 * Dissonant's bot worker instances
 *
 * * Handles a number of servers and provides services to Chords attached to those servers
 * * Synchronizes via database and only database
 */
export class DissonantWorker {

  /// Handle a service plane packet
  private handleServicePlanePacket(packet: DissonantServicePacket): DissonantServiceStatus {
    switch(packet.payload.type) {
      case "ping":
      case "worker-log":

    }
    return DissonantServiceStatus.Unrecognized;
  }
}
