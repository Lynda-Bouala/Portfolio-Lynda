import translations from '../translations'

function About({ language }) {
  const t = translations[language].about

  return (
    <section id="about" className="about">

      <div className="about-title">
        <p>{t.label}</p>
        <h2>{t.title}</h2>
      </div>

      <div className="about-content">

        <div className="about-text">
          <p>{t.paragraph1}</p>

          <p>{t.paragraph2}</p>

          <p>{t.paragraph3}</p>

          <p>{t.paragraph4}</p>
        </div>

        <div className="about-info">

          <div>
            <span>{t.info.formation.label}</span>
            <strong>{t.info.formation.value}</strong>
          </div>

          <div>
            <span>{t.info.university.label}</span>
            <strong>{t.info.university.value}</strong>
          </div>

          <div>
            <span>{t.info.location.label}</span>
            <strong>{t.info.location.value}</strong>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About