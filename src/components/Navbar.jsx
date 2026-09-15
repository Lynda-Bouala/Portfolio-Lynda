import { useState } from 'react'
import translations from '../translations'

function Navbar({ language }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const t = translations[language].nav

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  return (
    <nav>
      <h2>Lynda.</h2>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>

        <a href="#home" onClick={() => setMenuOpen(false)}>
          {t.home}
        </a>

        <a href="#about" onClick={() => setMenuOpen(false)}>
          {t.about}
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          {t.skills}
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          {t.projects}
        </a>

        <a href="#parcours" onClick={() => setMenuOpen(false)}>
          {t.parcours}
        </a>

        <a href="#motivation" onClick={() => setMenuOpen(false)}>
          {t.motivation}
        </a>

        <a href="#experiences" onClick={() => setMenuOpen(false)}>
          {t.experiences}
        </a>

        <a href="#interests" onClick={() => setMenuOpen(false)}>
          {t.interests}
        </a>

        <a href="#langues" onClick={() => setMenuOpen(false)}>
          {t.languages}
        </a>

        <a
          href="#cv"
          className="nav-cv"
          onClick={() => setMenuOpen(false)}
        >
          {t.cv}
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          {t.contact}
        </a>

      </div>

      <div className="nav-actions">
        <button
          className="theme-button"
          onClick={toggleDarkMode}
          aria-label="Changer de thème"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
      >
        ☰
      </button>
    </nav>
  )
}

export default Navbar