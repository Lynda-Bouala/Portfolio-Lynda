import translations from '../translations'

function Langues({ language }) {
  const t = translations[language].languages

  const languages = [
    {
      name: t.french.name,
      flag: '🇫🇷',
      level: t.french.level,
      width: '100%',
    },
    {
      name: t.arabic.name,
      flag: '🇩🇿',
      level: t.arabic.level,
      width: '100%',
    },
    {
      name: t.english.name,
      flag: '🇬🇧',
      level: t.english.level,
      width: '80%',
    },
    {
      name: t.kabyle.name,
flag: 'ⵣ',      level: t.kabyle.level,
      width: '100%',
    },
  ]

  return (
    <section id="langues" className="langues">
      <div className="langues-title">
        <p>{t.label}</p>
        <h2>{t.title}</h2>
        <span>{t.description}</span>
      </div>

      <div className="langues-grid">
        {languages.map((lang) => (
          <div className="langue-card" key={lang.name}>
            <div className="langue-top">
              <h3>{lang.name}</h3>
              <span>{lang.flag}</span>
            </div>

            <p>{lang.level}</p>

            <div className="langue-level">
              <div className="langue-bar">
                <div
                  className="langue-progress"
                  style={{ width: lang.width }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Langues