/**
 * Musik0fLaW Coalition
 * 6 Room Ultimate Underground/Mainstream DJ Streaming Platform
 *
 * Underground (Rooms 1-3): "In the daylight!" - Raw, experimental, hidden gems
 * Mainstream (Rooms 4-6): "Above ground, shielded!" - Chart hits, popular sounds
 */

import { CoalitionBranding } from '../types';

export const COALITION_BRANDING: CoalitionBranding = {
  name: 'Musik0fLaW Coalition',
  tagline: 'Where Sound Meets Law',
  undergroundTheme: {
    primaryColor: '#1a1a2e',
    accentColor: '#e94560',
    description: 'In the daylight! - Raw underground sounds, experimental mixes, hidden gems',
  },
  mainstreamTheme: {
    primaryColor: '#16213e',
    accentColor: '#0f3460',
    description: 'Above ground, shielded! - Chart toppers, mainstream hits, popular vibes',
  },
};

// 6 Selected DJ Slots
export interface DJSlot {
  slotNumber: 1 | 2 | 3 | 4 | 5 | 6;
  category: 'underground' | 'mainstream';
  djName: string | null;
  scheduledTime: string | null;
  genre: string[];
}

export const DJ_SLOTS: DJSlot[] = [
  // Underground - "In the daylight!"
  { slotNumber: 1, category: 'underground', djName: null, scheduledTime: null, genre: [] },
  { slotNumber: 2, category: 'underground', djName: null, scheduledTime: null, genre: [] },
  { slotNumber: 3, category: 'underground', djName: null, scheduledTime: null, genre: [] },
  // Mainstream - "Above ground, shielded!"
  { slotNumber: 4, category: 'mainstream', djName: null, scheduledTime: null, genre: [] },
  { slotNumber: 5, category: 'mainstream', djName: null, scheduledTime: null, genre: [] },
  { slotNumber: 6, category: 'mainstream', djName: null, scheduledTime: null, genre: [] },
];

export function assignDJToSlot(
  slotNumber: 1 | 2 | 3 | 4 | 5 | 6,
  djName: string,
  genres: string[]
): DJSlot {
  const slot = DJ_SLOTS.find(s => s.slotNumber === slotNumber);
  if (!slot) throw new Error(`Invalid slot number: ${slotNumber}`);

  slot.djName = djName;
  slot.genre = genres;
  return slot;
}

export function getUndergroundSlots(): DJSlot[] {
  return DJ_SLOTS.filter(s => s.category === 'underground');
}

export function getMainstreamSlots(): DJSlot[] {
  return DJ_SLOTS.filter(s => s.category === 'mainstream');
}

// Coalition-wide audio sync config (Global DJ Bus)
export const AUDIO_BUS_CONFIG = {
  syncEnabled: true,
  masterLatency: 0,
  crossfadeTime: 2000, // ms
  bufferSize: 4096,
  sampleRate: 48000,
};
