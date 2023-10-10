import { DissonantServicePacket, DissonantServiceStatus } from "../types/Services";

/**
 * Dissonant's core controller service
 *
 * * Manages the webpanel
 * * Manages Chord registrations and synchronization
 * * Runs Worker processes.
 */
export class DissonantController {

  /// Handle a service plane packet
  private handleServicePlanePacket(packet: DissonantServicePacket): DissonantServiceStatus {
    switch(packet.payload.type) {
      case "ping":
      case "worker-log":

    }
    return DissonantServiceStatus.Unrecognized;
  }
}
