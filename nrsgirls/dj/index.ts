/**
 * NRSgirls DJ Streaming Module
 * Musik0fLaW Coalition - 6 Room Ultimate System
 *
 * Inspired by Mixcloud Live architecture
 * https://www.mixcloud.com/live/
 */

export * from './types';
export * from './rooms';
export * from './obs-config';
export * from './coalition';
export * from './profiles';

import { rooms, getActiveRooms, getLiveRooms } from './rooms';
import { COALITION_BRANDING, DJ_SLOTS, AUDIO_BUS_CONFIG } from './coalition';
import { generateAllRoomConfigs, obsWebSocketConfig } from './obs-config';

// Main DJ Platform Controller
export class DJPlatformController {
  private static instance: DJPlatformController;

  private constructor() {}

  static getInstance(): DJPlatformController {
    if (!DJPlatformController.instance) {
      DJPlatformController.instance = new DJPlatformController();
    }
    return DJPlatformController.instance;
  }

  getBranding() {
    return COALITION_BRANDING;
  }

  getAllRooms() {
    return rooms;
  }

  getActiveRooms() {
    return getActiveRooms();
  }

  getLiveRooms() {
    return getLiveRooms();
  }

  getDJSlots() {
    return DJ_SLOTS;
  }

  getAudioBusConfig() {
    return AUDIO_BUS_CONFIG;
  }

  getOBSConfigs() {
    return generateAllRoomConfigs();
  }

  getOBSWebSocketConfig() {
    return obsWebSocketConfig;
  }

  // Room status summary
  getStatus() {
    const active = getActiveRooms();
    const live = getLiveRooms();

    return {
      totalRooms: 6,
      undergroundRooms: 3,
      mainstreamRooms: 3,
      activeRooms: active.length,
      liveRooms: live.length,
      branding: COALITION_BRANDING.name,
    };
  }
}

export default DJPlatformController;
