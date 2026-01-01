/**
 * OBS Configuration for NRSgirls 6-Room DJ Streaming
 * Musik0fLaW Coalition Output Settings
 */

import { OBSConfig, ROOM_CONFIG } from '../types';

// Default streaming settings optimized for DJ audio
const DEFAULT_AUDIO_BITRATE = 320; // High quality audio for music
const DEFAULT_VIDEO_BITRATE = 4500; // Good quality video
const DEFAULT_RESOLUTION = '1920x1080';

export function generateOBSConfig(roomNumber: number, streamKey: string): OBSConfig {
  const roomInfo = ROOM_CONFIG[roomNumber];

  return {
    roomNumber,
    sceneName: `${roomInfo.name} - Musik0fLaW`,
    rtmpServer: process.env.RTMP_SERVER || 'rtmp://stream.nrsgirls.com/live',
    streamKey,
    audioBitrate: DEFAULT_AUDIO_BITRATE,
    videoBitrate: DEFAULT_VIDEO_BITRATE,
    outputResolution: DEFAULT_RESOLUTION,
  };
}

// Pre-configured OBS scene templates for each room type
export const obsSceneTemplates = {
  underground: {
    sceneName: 'Underground Session',
    sources: [
      { name: 'DJ Camera', type: 'video_capture' },
      { name: 'Audio Input', type: 'audio_input_capture' },
      { name: 'Visualizer', type: 'browser_source' },
      { name: 'Underground Overlay', type: 'image_source' },
      { name: 'Chat Widget', type: 'browser_source' },
    ],
    filters: {
      audio: ['compressor', 'limiter', 'eq_3band'],
      video: ['color_correction'],
    },
  },
  mainstream: {
    sceneName: 'Mainstream Broadcast',
    sources: [
      { name: 'DJ Camera', type: 'video_capture' },
      { name: 'Audio Input', type: 'audio_input_capture' },
      { name: 'Visualizer', type: 'browser_source' },
      { name: 'Mainstream Overlay', type: 'image_source' },
      { name: 'Chat Widget', type: 'browser_source' },
      { name: 'Sponsor Banner', type: 'image_source' },
    ],
    filters: {
      audio: ['compressor', 'limiter', 'eq_3band'],
      video: ['color_correction', 'sharpness'],
    },
  },
};

// Generate all 6 room configurations
export function generateAllRoomConfigs(): OBSConfig[] {
  return [1, 2, 3, 4, 5, 6].map(roomNum =>
    generateOBSConfig(roomNum, `room${roomNum}_${Date.now()}`)
  );
}

// OBS WebSocket connection config (for remote control)
export const obsWebSocketConfig = {
  host: process.env.OBS_WEBSOCKET_HOST || 'localhost',
  port: parseInt(process.env.OBS_WEBSOCKET_PORT || '4455'),
  password: process.env.OBS_WEBSOCKET_PASSWORD || '',
};
