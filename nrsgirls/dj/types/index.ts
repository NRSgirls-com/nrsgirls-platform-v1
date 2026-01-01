/**
 * NRSgirls DJ Streaming Types
 * Musik0fLaW Coalition - 6 Room Ultimate Underground/Mainstream System
 */

export type RoomType = 'underground' | 'mainstream';

export interface DJProfile {
  id: string;
  name: string;
  alias: string;
  roomNumber: 1 | 2 | 3 | 4 | 5 | 6;
  roomType: RoomType;
  obsStreamKey: string;
  mixcloudProfile?: string;
  genres: string[];
  isLive: boolean;
  currentTrack?: string;
}

export interface DJRoom {
  roomNumber: 1 | 2 | 3 | 4 | 5 | 6;
  roomType: RoomType;
  dj: DJProfile | null;
  streamUrl: string;
  rtmpEndpoint: string;
  obsSceneCollection: string;
  viewerCount: number;
  isActive: boolean;
}

export interface OBSConfig {
  roomNumber: number;
  sceneName: string;
  rtmpServer: string;
  streamKey: string;
  audioBitrate: number;
  videoBitrate: number;
  outputResolution: string;
}

export interface CoalitionBranding {
  name: 'Musik0fLaW Coalition';
  tagline: string;
  undergroundTheme: {
    primaryColor: string;
    accentColor: string;
    description: string;
  };
  mainstreamTheme: {
    primaryColor: string;
    accentColor: string;
    description: string;
  };
}

// 6 Room Configuration
export const ROOM_CONFIG: Record<number, { type: RoomType; name: string }> = {
  1: { type: 'underground', name: 'Underground Room 1' },
  2: { type: 'underground', name: 'Underground Room 2' },
  3: { type: 'underground', name: 'Underground Room 3' },
  4: { type: 'mainstream', name: 'Mainstream Room 1' },
  5: { type: 'mainstream', name: 'Mainstream Room 2' },
  6: { type: 'mainstream', name: 'Mainstream Room 3' },
};
