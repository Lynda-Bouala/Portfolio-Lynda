import { useState } from 'react'

function LanguagePopup({ setLanguage }) {
  const [visible, setVisible] = useState(true)

  const chooseLanguage = (language) => {
  localStorage.setItem('language', language)
  setLanguage(language)
  setVisible(false)
}
  if (!visible) return null

  return (
    <div className="language-overlay">
      <div className="language-popup">

        <button
          className="language-close"
          onClick={() => setVisible(false)}
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="language-icon">🌐</div>

        <h2>Voir le portfolio en anglais ?</h2>

        <p>
          Would you like to view my portfolio in English?
        </p>

        <div className="language-buttons">

          <button onClick={() => chooseLanguage('fr')}>
            Français
          </button>

          <button onClick={() => chooseLanguage('en')}>
            English
          </button>

        </div>

      </div>
    </div>
  )
}

export default LanguagePopup