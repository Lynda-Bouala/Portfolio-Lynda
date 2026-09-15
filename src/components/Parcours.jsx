import translations from '../translations'

function Parcours({ language }) {

  const t = translations[language].parcours

  return (

    <section id="parcours" className="parcours">

      <div className="parcours-title">

        <p>{t.label}</p>

        <h2>{t.title}</h2>

        <span>
          {t.description}
        </span>

      </div>


      <div className="parcours-list">

        {/* AUJOURD'HUI */}
        <article className="parcours-item">

          <div className="parcours-year">
            {t.current.year}
          </div>

          <div className="parcours-content">

            <h3>{t.current.title}</h3>

            <p>{t.current.location}</p>

            <span>
              {t.current.description}
            </span>

          </div>

        </article>


        {/* 2025–2026 */}
        <article className="parcours-item">

          <div className="parcours-year">
            2025–2026
          </div>

          <div className="parcours-content">

            <h3>{t.but.title}</h3>

            <p>{t.but.location}</p>

            <span>
              {t.but.description}
            </span>

          </div>

        </article>


        {/* 2024–2025 */}
        <article className="parcours-item">

          <div className="parcours-year">
            2024–2025
          </div>

          <div className="parcours-content">

            <h3>{t.esi.title}</h3>

            <p>{t.esi.location}</p>

            <span>
              {t.esi.description}
            </span>

          </div>

        </article>


        {/* 2024 */}
        <article className="parcours-item">

          <div className="parcours-year">
            2024
          </div>

          <div className="parcours-content">

            <h3>{t.bac.title}</h3>

            <p>{t.bac.location}</p>

            <strong>{t.bac.grade}</strong>

            <span>
              {t.bac.description}
            </span>

          </div>

        </article>

      </div>

    </section>
  )
}

export default Parcours