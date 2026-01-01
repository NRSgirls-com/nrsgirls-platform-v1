/**
 * NRSgirls DJ Profiles - 6 Selected DJs from Mixcloud Live
 * Musik0fLaW Coalition
 *
 * Profile structure inspired by https://www.mixcloud.com/live/
 */

export interface DJProfilePage {
  id: string;
  slot: 1 | 2 | 3 | 4 | 5 | 6;
  category: 'underground' | 'mainstream';

  // Basic Info
  displayName: string;
  username: string;
  mixcloudUrl: string;
  avatarUrl: string;
  coverImageUrl: string;
  bio: string;
  location: string;

  // Music Info
  genres: string[];
  currentShow: string | null;
  isLive: boolean;

  // Stats
  followers: number;
  plays: number;
  favorites: number;

  // Social Links
  socials: {
    mixcloud: string;
    instagram?: string;
    twitter?: string;
    soundcloud?: string;
  };

  // Streaming
  streamKey: string;
  obsScene: string;
}

// 6 Selected DJ Slots - Fill in your DJs from Mixcloud Live
export const DJ_PROFILES: DJProfilePage[] = [
  // UNDERGROUND - Rooms 1-3 ("In the daylight!")
  {
    id: 'dj-slot-1',
    slot: 1,
    category: 'underground',
    displayName: '', // Add DJ name
    username: '',
    mixcloudUrl: 'https://www.mixcloud.com/live/',
    avatarUrl: '',
    coverImageUrl: '',
    bio: '',
    location: '',
    genres: [],
    currentShow: null,
    isLive: false,
    followers: 0,
    plays: 0,
    favorites: 0,
    socials: { mixcloud: '' },
    streamKey: 'slot1_underground',
    obsScene: 'Underground Room 1',
  },
  {
    id: 'dj-slot-2',
    slot: 2,
    category: 'underground',
    displayName: '', // Add DJ name
    username: '',
    mixcloudUrl: 'https://www.mixcloud.com/live/',
    avatarUrl: '',
    coverImageUrl: '',
    bio: '',
    location: '',
    genres: [],
    currentShow: null,
    isLive: false,
    followers: 0,
    plays: 0,
    favorites: 0,
    socials: { mixcloud: '' },
    streamKey: 'slot2_underground',
    obsScene: 'Underground Room 2',
  },
  {
    id: 'dj-slot-3',
    slot: 3,
    category: 'underground',
    displayName: '', // Add DJ name
    username: '',
    mixcloudUrl: 'https://www.mixcloud.com/live/',
    avatarUrl: '',
    coverImageUrl: '',
    bio: '',
    location: '',
    genres: [],
    currentShow: null,
    isLive: false,
    followers: 0,
    plays: 0,
    favorites: 0,
    socials: { mixcloud: '' },
    streamKey: 'slot3_underground',
    obsScene: 'Underground Room 3',
  },

  // MAINSTREAM - Rooms 4-6 ("Above ground, shielded!")
  {
    id: 'dj-slot-4',
    slot: 4,
    category: 'mainstream',
    displayName: '', // Add DJ name
    username: '',
    mixcloudUrl: 'https://www.mixcloud.com/live/',
    avatarUrl: '',
    coverImageUrl: '',
    bio: '',
    location: '',
    genres: [],
    currentShow: null,
    isLive: false,
    followers: 0,
    plays: 0,
    favorites: 0,
    socials: { mixcloud: '' },
    streamKey: 'slot4_mainstream',
    obsScene: 'Mainstream Room 1',
  },
  {
    id: 'dj-slot-5',
    slot: 5,
    category: 'mainstream',
    displayName: '', // Add DJ name
    username: '',
    mixcloudUrl: 'https://www.mixcloud.com/live/',
    avatarUrl: '',
    coverImageUrl: '',
    bio: '',
    location: '',
    genres: [],
    currentShow: null,
    isLive: false,
    followers: 0,
    plays: 0,
    favorites: 0,
    socials: { mixcloud: '' },
    streamKey: 'slot5_mainstream',
    obsScene: 'Mainstream Room 2',
  },
  {
    id: 'dj-slot-6',
    slot: 6,
    category: 'mainstream',
    displayName: '', // Add DJ name
    username: '',
    mixcloudUrl: 'https://www.mixcloud.com/live/',
    avatarUrl: '',
    coverImageUrl: '',
    bio: '',
    location: '',
    genres: [],
    currentShow: null,
    isLive: false,
    followers: 0,
    plays: 0,
    favorites: 0,
    socials: { mixcloud: '' },
    streamKey: 'slot6_mainstream',
    obsScene: 'Mainstream Room 3',
  },
];

// Helper functions
export function getDJBySlot(slot: number): DJProfilePage | undefined {
  return DJ_PROFILES.find(dj => dj.slot === slot);
}

export function getUndergroundDJs(): DJProfilePage[] {
  return DJ_PROFILES.filter(dj => dj.category === 'underground');
}

export function getMainstreamDJs(): DJProfilePage[] {
  return DJ_PROFILES.filter(dj => dj.category === 'mainstream');
}

export function getLiveDJs(): DJProfilePage[] {
  return DJ_PROFILES.filter(dj => dj.isLive);
}

export function updateDJProfile(slot: number, updates: Partial<DJProfilePage>): void {
  const index = DJ_PROFILES.findIndex(dj => dj.slot === slot);
  if (index !== -1) {
    DJ_PROFILES[index] = { ...DJ_PROFILES[index], ...updates };
  }
}
