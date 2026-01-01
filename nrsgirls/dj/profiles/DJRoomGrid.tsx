/**
 * DJ Room Grid - 6 Room Display
 * Musik0fLaW Coalition - Underground & Mainstream Layout
 *
 * Inspired by Mixcloud Live grid layout
 */

import React from 'react';
import { DJ_PROFILES, getUndergroundDJs, getMainstreamDJs } from './index';
import { DJProfileCard } from './DJProfileCard';
import { DJProfilePage } from './index';

interface DJRoomGridProps {
  onSelectDJ?: (profile: DJProfilePage) => void;
  showUnderground?: boolean;
  showMainstream?: boolean;
}

export const DJRoomGrid: React.FC<DJRoomGridProps> = ({
  onSelectDJ,
  showUnderground = true,
  showMainstream = true,
}) => {
  const undergroundDJs = getUndergroundDJs();
  const mainstreamDJs = getMainstreamDJs();

  return (
    <div className="dj-room-grid" style={{
      background: '#0d0d0d',
      minHeight: '100vh',
      padding: '40px',
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '40px',
        color: 'white',
      }}>
        <h1 style={{ fontSize: '36px', margin: 0 }}>
          Musik0fLaW Coalition
        </h1>
        <p style={{ opacity: 0.6, fontSize: '18px' }}>
          6 Room Ultimate DJ Streaming Platform
        </p>
      </div>

      {/* Underground Section */}
      {showUnderground && (
        <div className="section-underground" style={{ marginBottom: '50px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            color: 'white',
          }}>
            <div style={{
              width: '4px',
              height: '30px',
              background: '#e94560',
              marginRight: '15px',
            }} />
            <div>
              <h2 style={{ margin: 0 }}>Underground</h2>
              <p style={{ margin: 0, opacity: 0.6 }}>In the daylight! • Rooms 1-3</p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {undergroundDJs.map(dj => (
              <DJProfileCard
                key={dj.id}
                profile={dj}
                onSelect={onSelectDJ}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mainstream Section */}
      {showMainstream && (
        <div className="section-mainstream">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '20px',
            color: 'white',
          }}>
            <div style={{
              width: '4px',
              height: '30px',
              background: '#0f3460',
              marginRight: '15px',
            }} />
            <div>
              <h2 style={{ margin: 0 }}>Mainstream</h2>
              <p style={{ margin: 0, opacity: 0.6 }}>Above ground, shielded! • Rooms 4-6</p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {mainstreamDJs.map(dj => (
              <DJProfileCard
                key={dj.id}
                profile={dj}
                onSelect={onSelectDJ}
              />
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '50px',
        paddingTop: '30px',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        color: 'white',
        opacity: 0.5,
        fontSize: '14px',
      }}>
        Powered by NRSgirls.com • Musik0fLaW Coalition
      </div>
    </div>
  );
};

export default DJRoomGrid;
