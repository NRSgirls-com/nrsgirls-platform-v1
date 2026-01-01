/**
 * DJ Profile Full Page Component
 * Mixcloud Live inspired layout for NRSgirls platform
 * Musik0fLaW Coalition
 */

import React from 'react';
import { DJProfilePage as DJProfileData } from './index';

interface DJProfilePageProps {
  profile: DJProfileData;
  onGoLive?: () => void;
  onFollow?: () => void;
}

export const DJProfilePageComponent: React.FC<DJProfilePageProps> = ({
  profile,
  onGoLive,
  onFollow,
}) => {
  const isUnderground = profile.category === 'underground';

  const theme = {
    bg: isUnderground ? '#1a1a2e' : '#16213e',
    accent: isUnderground ? '#e94560' : '#0f3460',
    tagline: isUnderground ? 'In the daylight!' : 'Above ground, shielded!',
  };

  return (
    <div className="dj-profile-page" style={{
      minHeight: '100vh',
      background: theme.bg,
      color: 'white',
    }}>
      {/* Cover Image */}
      <div className="cover" style={{
        height: '300px',
        background: profile.coverImageUrl
          ? `url(${profile.coverImageUrl})`
          : `linear-gradient(135deg, ${theme.bg} 0%, ${theme.accent} 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}>
        {/* Live Stream Embed Area */}
        {profile.isLive && (
          <div className="live-stream-container" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              textAlign: 'center',
              padding: '20px',
            }}>
              <div style={{
                background: '#ff0000',
                padding: '8px 20px',
                borderRadius: '25px',
                display: 'inline-block',
                marginBottom: '15px',
                fontWeight: 'bold',
              }}>
                🔴 LIVE NOW
              </div>
              <h2>{profile.currentShow || 'Live Session'}</h2>
              <p style={{ opacity: 0.7 }}>Stream player will render here</p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          background: theme.accent,
          padding: '8px 16px',
          borderRadius: '25px',
          fontSize: '13px',
          fontWeight: 'bold',
        }}>
          {profile.category.toUpperCase()} • Room {profile.slot}
        </div>
      </div>

      {/* Profile Header */}
      <div className="profile-header" style={{
        padding: '0 40px',
        marginTop: '-60px',
        position: 'relative',
        zIndex: 10,
      }}>
        {/* Avatar */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: profile.avatarUrl ? `url(${profile.avatarUrl})` : '#444',
          backgroundSize: 'cover',
          border: `4px solid ${theme.bg}`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        }} />

        {/* Name & Username */}
        <div style={{ marginTop: '15px' }}>
          <h1 style={{ margin: 0, fontSize: '32px' }}>
            {profile.displayName || `DJ Slot ${profile.slot}`}
          </h1>
          <p style={{ margin: '5px 0', opacity: 0.6, fontSize: '16px' }}>
            @{profile.username || 'pending'}
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px' }}>
            📍 {profile.location || 'Location TBD'}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button
            onClick={onFollow}
            style={{
              background: theme.accent,
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Follow
          </button>
          {!profile.isLive && (
            <button
              onClick={onGoLive}
              style={{
                background: '#ff0000',
                color: 'white',
                border: 'none',
                padding: '12px 30px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
            >
              Go Live
            </button>
          )}
          <a
            href={profile.mixcloudUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              border: 'none',
              padding: '12px 30px',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Mixcloud ↗
          </a>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="stats-bar" style={{
        display: 'flex',
        gap: '40px',
        padding: '30px 40px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {profile.followers.toLocaleString()}
          </div>
          <div style={{ opacity: 0.6, fontSize: '14px' }}>Followers</div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {profile.plays.toLocaleString()}
          </div>
          <div style={{ opacity: 0.6, fontSize: '14px' }}>Plays</div>
        </div>
        <div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {profile.favorites.toLocaleString()}
          </div>
          <div style={{ opacity: 0.6, fontSize: '14px' }}>Favorites</div>
        </div>
      </div>

      {/* Bio & Genres */}
      <div className="profile-content" style={{ padding: '30px 40px' }}>
        {/* Tagline */}
        <div style={{
          background: `linear-gradient(90deg, ${theme.accent}44, transparent)`,
          padding: '15px 20px',
          borderRadius: '8px',
          marginBottom: '25px',
          borderLeft: `4px solid ${theme.accent}`,
        }}>
          <strong>Musik0fLaW Coalition</strong> • {theme.tagline}
        </div>

        {/* Bio */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ marginBottom: '10px' }}>About</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.6 }}>
            {profile.bio || 'Bio coming soon...'}
          </p>
        </div>

        {/* Genres */}
        <div style={{ marginBottom: '25px' }}>
          <h3 style={{ marginBottom: '10px' }}>Genres</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {profile.genres.length > 0 ? (
              profile.genres.map((genre, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '14px',
                }}>
                  {genre}
                </span>
              ))
            ) : (
              <span style={{ opacity: 0.5 }}>Genres TBD</span>
            )}
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h3 style={{ marginBottom: '10px' }}>Connect</h3>
          <div style={{ display: 'flex', gap: '10px' }}>
            {profile.socials.mixcloud && (
              <a href={profile.socials.mixcloud} target="_blank" rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.8 }}>Mixcloud</a>
            )}
            {profile.socials.instagram && (
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.8 }}>Instagram</a>
            )}
            {profile.socials.twitter && (
              <a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.8 }}>Twitter</a>
            )}
            {profile.socials.soundcloud && (
              <a href={profile.socials.soundcloud} target="_blank" rel="noopener noreferrer"
                style={{ color: 'white', opacity: 0.8 }}>SoundCloud</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DJProfilePageComponent;
