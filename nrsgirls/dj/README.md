# NRSgirls DJ Streaming Platform

## Musik0fLaW Coalition - 6 Room Ultimate System

Inspired by [Mixcloud Live](https://www.mixcloud.com/live/) architecture.

## Room Structure

### Underground (Rooms 1-3) - "In the daylight!"
- Raw, experimental sounds
- Hidden gems and deep cuts
- Emerging artists and underground scenes

### Mainstream (Rooms 4-6) - "Above ground, shielded!"
- Chart toppers and popular hits
- Mainstream vibes
- Commercial-friendly content

## Directory Structure

```
nrsgirls/dj/
├── index.ts           # Main module exports & controller
├── types/             # TypeScript type definitions
│   └── index.ts
├── rooms/             # 6-room configuration
│   └── index.ts
├── obs-config/        # OBS streaming configuration
│   └── index.ts
├── coalition/         # Musik0fLaW Coalition branding
│   └── index.ts
└── README.md
```

## OBS Integration

Each room has pre-configured OBS settings:
- **Audio:** 320kbps (optimized for music)
- **Video:** 4500kbps @ 1080p
- **Scene Templates:** Underground & Mainstream themes

### Scene Sources
- DJ Camera
- Audio Input Capture
- Audio Visualizer
- Overlay Graphics
- Chat Widget

## Usage

```typescript
import { DJPlatformController } from './nrsgirls/dj';

const platform = DJPlatformController.getInstance();

// Get platform status
const status = platform.getStatus();

// Get all rooms
const rooms = platform.getAllRooms();

// Get OBS configs for streaming
const obsConfigs = platform.getOBSConfigs();
```

## Global DJ Audio Bus

All rooms sync to a global audio bus with:
- Cross-fade support (2s default)
- 48kHz sample rate
- Low-latency sync

---

**Powered by Musik0fLaW Coalition**
