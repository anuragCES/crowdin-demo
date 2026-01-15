import React from 'react';
import Sidebar from '../components/Sidebar';

const samplePlaylists = [
  { id: 1, title: "Today's Top Hits", desc: "Drake on top of the Hottest 50!", color: '#a78bfa' },
  { id: 2, title: 'RapCaviar', desc: 'Music from Lil Tecca, Lil Uzi Vert and Gucci Mane.', color: '#fb7185' },
  { id: 3, title: 'All Out 2010s', desc: 'The biggest songs of the 2010s.', color: '#60a5fa' },
  { id: 4, title: 'Rock Classics', desc: 'Rock legends & epic songs that continue to...', color: '#94a3b8' },
  { id: 5, title: 'Chill Hits', desc: 'Kick back to the best new and recent chill hits.', color: '#fcd34d' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div className="app">
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="main">
        <header className="topbar">
          <div className="topbar-left">
            <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">☰</button>
            <div className="arrows">‹ ›</div>
            <h2>Spotify Playlists</h2>
          </div>

          <div className="topbar-right">
            {isLoggedIn ? (
              <>
                <span className="user">demo-user</span>
                <button className="btn ghost" onClick={() => setIsLoggedIn(false)}>Log out</button>
              </>
            ) : (
              <button className="btn" onClick={() => setIsLoggedIn(true)}>Log in</button>
            )}
          </div>
        </header>

        <section className="content">
          <div className="section">
            <h3>Spotify Playlists</h3>
            <div className="cards">
              {samplePlaylists.map(p => (
                <article key={p.id} className="card">
                  <div className="art" style={{ background: p.color }} />
                  <div className="meta">
                    <div className="card-title">{p.title}</div>
                    <div className="card-desc">{p.desc}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>Sleep</h3>
            <div className="cards small">
              <div className="card">
                <div className="art" style={{ background: '#7dd3fc' }} />
                <div className="meta"><div className="card-title">Sleep</div></div>
              </div>
              <div className="card">
                <div className="art" style={{ background: '#c7b2ff' }} />
                <div className="meta"><div className="card-title">Calm Nights</div></div>
              </div>
            </div>
          </div>
        </section>

        <div className="promo">
          <div className="promo-text">Preview of Spotify — Sign up to get unlimited songs and podcasts.</div>
          <button className="btn">Sign up free</button>
        </div>
      </main>
    </div>
  );
}
