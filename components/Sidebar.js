
export default function Sidebar({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar" aria-hidden={menuOpen ? 'true' : 'false'}>
        <div className="brand">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="#1db954">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>

        <nav className="nav">
          <button className="nav-item">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{marginRight: 12}}>
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            Buscar
          </button>
          <button className="nav-item active">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{marginRight: 12}}>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            Explorar
          </button>
          <button className="nav-item">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" style={{marginRight: 12}}>
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            Tu música
          </button>
        </nav>

        <div className="library-section">
          <div className="library-header">ESCUCHADOS RECIENTEMENTE</div>
          <div className="playlist-item">
            <div className="playlist-art"></div>
            <div className="playlist-info">
              <div className="playlist-name">Garde la pêche !</div>
              <div className="playlist-type">PLAYLIST</div>
            </div>
          </div>
        </div>

        <div className="sidebar-footer">
          <button className="install-app">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style={{marginRight: 8}}>
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
            </svg>
            Instalar app
          </button>
          <div className="user-profile">
            <div className="avatar">ba</div>
            <span>baleyo</span>
          </div>
        </div>
      </aside>

      {/* Mobile drawer overlay */}
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!menuOpen}>
        <div className="mobile-drawer-inner">
          <button className="close" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
          <div className="brand">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="#1db954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          <nav className="nav">
            <button className="nav-item">Buscar</button>
            <button className="nav-item active">Explorar</button>
            <button className="nav-item">Tu música</button>
          </nav>
        </div>
        <button className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      </div>
    </>
  );
}
