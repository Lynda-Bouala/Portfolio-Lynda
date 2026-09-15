import translations from '../translations'

function Footer({ language }) {
  const t = translations[language].footer

  return (
    <footer className="footer">
      <p>© 2026 Lynda Bouala</p>
      <span>{t.description}</span>
    </footer>
  )
}

export default Footer