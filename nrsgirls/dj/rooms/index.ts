/**
 * NRSgirls DJ Rooms - 6 Room Configuration
 * Underground (Rooms 1-3): In the daylight! Hidden gems, experimental sounds
 * Mainstream (Rooms 4-6): Above ground, shielded! Popular hits, chart toppers
 *
 * Powered by Musik0fLaW Coalition
 */

import { DJRoom, RoomType, ROOM_CONFIG } from '../types';

const RTMP_BASE = process.env.RTMP_SERVER || 'rtmp://stream.nrsgirls.com/live';

export function createRoom(roomNumber: 1 | 2 | 3 | 4 | 5 | 6): DJRoom {
  const config = ROOM_CONFIG[roomNumber];

  return {
    roomNumber,
    roomType: config.type,
    dj: null,
    streamUrl: `${RTMP_BASE}/room${roomNumber}`,
    rtmpEndpoint: `${RTMP_BASE}/room${roomNumber}`,
    obsSceneCollection: `NRSgirls_DJ_Room_${roomNumber}`,
    viewerCount: 0,
    isActive: false,
  };
}

// Initialize all 6 rooms
export const rooms: DJRoom[] = [
  createRoom(1), // Underground
  createRoom(2), // Underground
  createRoom(3), // Underground
  createRoom(4), // Mainstream
  createRoom(5), // Mainstream
  createRoom(6), // Mainstream
];

export function getUndergroundRooms(): DJRoom[] {
  return rooms.filter(r => r.roomType === 'underground');
}

export function getMainstreamRooms(): DJRoom[] {
  return rooms.filter(r => r.roomType === 'mainstream');
}

export function getRoomByNumber(num: number): DJRoom | undefined {
  return rooms.find(r => r.roomNumber === num);
}

export function getActiveRooms(): DJRoom[] {
  return rooms.filter(r => r.isActive);
}

export function getLiveRooms(): DJRoom[] {
  return rooms.filter(r => r.dj?.isLive);
}
