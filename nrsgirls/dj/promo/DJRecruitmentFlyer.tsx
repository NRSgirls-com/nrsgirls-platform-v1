/**
 * DJ Recruitment Flyer - Musik0fLaW Coalition
 * 6 Room 24/7/365 Streaming Platform
 */

import React from 'react';

// Top 6 Genres for the platform
export const TOP_6_GENRES = [
  { name: 'House', icon: '🏠', description: 'Deep, Tech, Progressive' },
  { name: 'Techno', icon: '⚡', description: 'Industrial, Minimal, Hard' },
  { name: 'Hip-Hop/R&B', icon: '🎤', description: 'Trap, Neo-Soul, Boom Bap' },
  { name: 'EDM/Dance', icon: '💃', description: 'Future Bass, Electro, Big Room' },
  { name: 'Afrobeats', icon: '🌍', description: 'Amapiano, Afro-House, Dancehall' },
  { name: 'Lo-Fi/Chill', icon: '🌙', description: 'Ambient, Downtempo, Study Beats' },
];

export const COMPENSATION = {
  betaPeriod: '6 months',
  tokenShare: '10%',
  minHoursPerDay: 2,
  schedule: '24/7/365',
};

export const DJRecruitmentFlyer: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 50%, #0d0d0d 100%)',
      color: 'white',
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      minHeight: '100vh',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          background: 'linear-gradient(90deg, #e94560, #0f3460)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '48px',
          fontWeight: 'bold',
          marginBottom: '10px',
        }}>
          MUSIK0FLAW COALITION
        </div>
        <div style={{ fontSize: '24px', opacity: 0.8 }}>
          NOW RECRUITING DJs
        </div>
        <div style={{
          background: '#e94560',
          display: 'inline-block',
          padding: '8px 24px',
          borderRadius: '25px',
          marginTop: '15px',
          fontWeight: 'bold',
        }}>
          🔴 LIVE 24/7/365
        </div>
      </div>

      {/* Beta Trial Banner */}
      <div style={{
        background: 'rgba(233, 69, 96, 0.2)',
        border: '2px solid #e94560',
        borderRadius: '12px',
        padding: '20px',
        textAlign: 'center',
        marginBottom: '40px',
      }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
          🚀 BETA TRIAL - LIMITED SPOTS
        </div>
        <div style={{ opacity: 0.9 }}>
          Be one of the first 6 DJs to join our exclusive streaming platform
        </div>
      </div>

      {/* Top 6 Genres */}
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '25px',
          fontSize: '28px',
        }}>
          TOP 6 GENRES - PICK YOUR LANE
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '15px',
        }}>
          {TOP_6_GENRES.map((genre, i) => (
            <div key={i} style={{
              background: i < 3
                ? 'linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)'
                : 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
            }}>
              <div style={{ fontSize: '36px' }}>{genre.icon}</div>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {genre.name}
                </div>
                <div style={{ opacity: 0.7, fontSize: '14px' }}>
                  {genre.description}
                </div>
                <div style={{
                  background: 'rgba(255,255,255,0.2)',
                  padding: '3px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  display: 'inline-block',
                  marginTop: '5px',
                }}>
                  {i < 3 ? 'Underground' : 'Mainstream'} • Room {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compensation Box */}
      <div style={{
        background: 'linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)',
        borderRadius: '16px',
        padding: '30px',
        marginBottom: '40px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>
          💰 EARN WHILE YOU SPIN
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          textAlign: 'center',
        }}>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '20px',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#e94560' }}>
              BETA
            </div>
            <div style={{ opacity: 0.7 }}>Trial Period</div>
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              First 6 months - Build your audience
            </div>
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '20px',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#00ff88' }}>
              10%
            </div>
            <div style={{ opacity: 0.7 }}>Token Share</div>
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              Of performer tokens during your sets
            </div>
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.3)',
            padding: '20px',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffd700' }}>
              2hrs
            </div>
            <div style={{ opacity: 0.7 }}>Minimum Daily</div>
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              In your selected genre slot
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '16px',
        padding: '30px',
        marginBottom: '40px',
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '25px' }}>
          📋 HOW IT WORKS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
        }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{
              background: '#e94560',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0,
            }}>1</div>
            <div>
              <strong>Apply & Select Genre</strong>
              <p style={{ opacity: 0.7, margin: '5px 0 0 0', fontSize: '14px' }}>
                Pick one of 6 genres that matches your style
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{
              background: '#e94560',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0,
            }}>2</div>
            <div>
              <strong>Stream 2+ Hours Daily</strong>
              <p style={{ opacity: 0.7, margin: '5px 0 0 0', fontSize: '14px' }}>
                Keep your room live in your time slot
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{
              background: '#e94560',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              flexShrink: 0,
            }}>3</div>
            <div>
              <strong>Earn Token Share</strong>
              <p style={{ opacity: 0.7, margin: '5px 0 0 0', fontSize: '14px' }}>
                After 6 months: 10% of performer tokens during your sets
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div style={{
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '12px',
        padding: '25px',
        marginBottom: '40px',
      }}>
        <h3 style={{ marginBottom: '15px' }}>✅ REQUIREMENTS</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 2 }}>
          <li>Mixcloud Live or equivalent streaming experience</li>
          <li>OBS or streaming software proficiency</li>
          <li>Reliable internet connection for live streaming</li>
          <li>Commitment to minimum 2 hours daily in your genre</li>
          <li>Professional attitude and reliability</li>
          <li>Music library appropriate for your selected genre</li>
        </ul>
      </div>

      {/* CTA */}
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, #e94560 0%, #0f3460 100%)',
        borderRadius: '16px',
      }}>
        <div style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px' }}>
          READY TO JOIN THE COALITION?
        </div>
        <div style={{ marginBottom: '20px', opacity: 0.9 }}>
          Only 6 spots available - One per genre
        </div>
        <button style={{
          background: 'white',
          color: '#1a1a2e',
          border: 'none',
          padding: '15px 40px',
          borderRadius: '30px',
          fontSize: '18px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}>
          APPLY NOW
        </button>
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        marginTop: '40px',
        opacity: 0.5,
        fontSize: '14px',
      }}>
        NRSgirls.com • Musik0fLaW Coalition • 24/7/365
      </div>
    </div>
  );
};

export default DJRecruitmentFlyer;
