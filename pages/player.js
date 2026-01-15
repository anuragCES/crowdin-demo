import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Player() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playlists = [
    {
      id: 1,
      title: 'Global',
      subtitle: 'TOP 50',
      image: 'world-map',
    },
    {
      id: 2,
      title: 'France',
      subtitle: 'TOP 50',
      image: 'france-flag',
    },
  ];

  const currentTrack = {
    title: 'Be Mine',
    artist: 'Ofenbach',
    currentTime: '1:09',
    duration: '2:41',
    progress: 42,
  };

  return (
    <div className="app">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="main">
        <header className="topbar">
          <div className="topbar-left">
            <button className="hamburger" onClick={() => setMenuOpen(true)}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
              </svg>
            </button>
          </div>
          <div className="topbar-right">
            <a href="#" className="ver-mas">VER MÁS</a>
          </div>
        </header>

        <section className="content">
          <div className="section">
            <h2 className="section-title">Listas de éxitos</h2>
            <div className="playlist-cards">
              {playlists.map((playlist) => (
                <div key={playlist.id} className="playlist-card">
                  <div className={`playlist-card-art ${playlist.image}`}>
                    <span className="spotify-badge">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="#1db954">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                    </span>
                  </div>
                  <div className="playlist-card-info">
                    <span className="playlist-card-subtitle">{playlist.subtitle}</span>
                    <span className="playlist-card-title">{playlist.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Player Bar */}
        <div className="player-bar">
          <div className="player-track-info">
            <div className="player-album-art"></div>
            <div className="player-track-details">
              <span className="player-track-title">{currentTrack.title}</span>
              <span className="player-track-artist">{currentTrack.artist}</span>
            </div>
            <button className="player-add-btn">+</button>
          </div>

          <div className="player-controls">
            <div className="player-buttons">
              <button className="player-btn">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>
              <button className="player-btn play-btn" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>
              <button className="player-btn">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </div>
            <div className="player-progress">
              <span className="player-time">{currentTrack.currentTime}</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${currentTrack.progress}%` }}></div>
              </div>
              <span className="player-time">{currentTrack.duration}</span>
            </div>
          </div>

          <div className="player-volume">
            <button className="player-btn">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
