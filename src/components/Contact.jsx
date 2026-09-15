import translations from '../translations'

function Contact({ language }) {
  const t = translations[language].contact

  return (
    <section id="contact" className="contact">
      <div className="contact-title">
        <p>{t.label}</p>

        <h2>{t.title}</h2>

        <span>
          {t.description}
        </span>
      </div>

      <div className="contact-links">

        <a
          href="mailto:lyndabouala61@gmail.com"
          className="contact-card"
        >
          <span className="contact-icon">✉️</span>

          <div>
            <small>{t.email.label}</small>
            <strong>{t.email.text}</strong>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">in</span>

          <div>
            <small>{t.linkedin.label}</small>
            <strong>{t.linkedin.text}</strong>
          </div>
        </a>

        <a
          href="https://github.com/Lynda-Bouala"
          target="_blank"
          rel="noreferrer"
          className="contact-card"
        >
          <span className="contact-icon">⌘</span>

          <div>
            <small>{t.github.label}</small>
            <strong>{t.github.text}</strong>
          </div>
        </a>

      </div>
    </section>
  )
}

export default Contact