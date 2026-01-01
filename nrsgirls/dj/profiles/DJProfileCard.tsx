/**
 * DJ Profile Card Component
 * Mixcloud Live inspired design for NRSgirls platform
 */

import React from 'react';
import { DJProfilePage } from './index';

interface DJProfileCardProps {
  profile: DJProfilePage;
  onSelect?: (profile: DJProfilePage) => void;
}

export const DJProfileCard: React.FC<DJProfileCardProps> = ({ profile, onSelect }) => {
  const categoryStyles = {
    underground: {
      gradient: 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)',
      badge: 'Underground',
      tagline: 'In the daylight!',
    },
    mainstream: {
      gradient: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
      badge: 'Mainstream',
      tagline: 'Above ground, shielded!',
    },
  };

  const style = categoryStyles[profile.category];

  return (
    <div
      className="dj-profile-card"
      style={{
        background: style.gradient,
        borderRadius: '12px',
        padding: '20px',
        color: 'white',
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onClick={() => onSelect?.(profile)}
    >
      {/* Live Badge */}
      {profile.isLive && (
        <div className="live-badge" style={{
          background: '#ff0000',
          padding: '4px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          fontWeight: 'bold',
          display: 'inline-block',
          marginBottom: '10px',
        }}>
          🔴 LIVE
        </div>
      )}

      {/* Category Badge */}
      <div className="category-badge" style={{
        background: 'rgba(255,255,255,0.2)',
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '11px',
        display: 'inline-block',
        marginLeft: profile.isLive ? '8px' : '0',
        marginBottom: '10px',
      }}>
        {style.badge} • {style.tagline}
      </div>

      {/* Avatar */}
      <div className="avatar" style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: profile.avatarUrl ? `url(${profile.avatarUrl})` : '#333',
        backgroundSize: 'cover',
        margin: '15px 0',
        border: '3px solid rgba(255,255,255,0.3)',
      }} />

      {/* DJ Info */}
      <h3 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>
        {profile.displayName || `DJ Slot ${profile.slot}`}
      </h3>
      <p style={{ margin: '0 0 10px 0', opacity: 0.7, fontSize: '14px' }}>
        @{profile.username || 'pending'}
      </p>

      {/* Current Show */}
      {profile.currentShow && (
        <p style={{
          margin: '10px 0',
          padding: '8px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '6px',
          fontSize: '13px',
        }}>
          🎵 {profile.currentShow}
        </p>
      )}

      {/* Genres */}
      <div className="genres" style={{ marginTop: '10px' }}>
        {profile.genres.map((genre, i) => (
          <span key={i} style={{
            background: 'rgba(255,255,255,0.15)',
            padding: '3px 8px',
            borderRadius: '12px',
            fontSize: '11px',
            marginRight: '5px',
          }}>
            {genre}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="stats" style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
        paddingTop: '15px',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        fontSize: '12px',
      }}>
        <span>{profile.followers.toLocaleString()} followers</span>
        <span>{profile.plays.toLocaleString()} plays</span>
      </div>

      {/* Room Number */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: 'rgba(0,0,0,0.5)',
        padding: '5px 10px',
        borderRadius: '20px',
        fontSize: '11px',
      }}>
        Room {profile.slot}
      </div>
    </div>
  );
};

export default DJProfileCard;
