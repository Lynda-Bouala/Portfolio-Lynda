import translations from '../translations'

function CV({ language }) {
  const t = translations[language].cv

  return (
    <section id="cv" className="cv">
      <div className="cv-content">
        <p>{t.label}</p>

        <h2>{t.title}</h2>

        <span>
          {t.description}
        </span>

        <div className="cv-buttons">
          <a
            href="/CV/CV-Lynda.pdf"
            target="_blank"
            rel="noreferrer"
          >
            {t.view}
          </a>

          <a
            href="/CV/CV-Lynda.pdf"
            download
          >
            {t.download}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CV