import translations from '../translations'

function Experiences({ language }) {

  const t = translations[language].experiences

  return (

    <section id="experiences" className="experiences">

      <div className="experiences-title">

        <p>{t.label}</p>

        <h2>{t.title}</h2>

        <span>
          {t.description}
        </span>

      </div>


      <div className="experiences-list">

        {/* 2026 */}
        <article className="experience-card">

          <div className="experience-year">
            2026
          </div>

          <div className="experience-content">

            <h3>{t.cashier.title}</h3>

            <p>
              {t.cashier.description}
            </p>

          </div>

        </article>


        {/* 2025 – 2026 */}
        <article className="experience-card">

          <div className="experience-year">
            2025 – 2026
          </div>

          <div className="experience-content">

            <h3>{t.childcare.title}</h3>

            <p>
              {t.childcare.description}
            </p>

          </div>

        </article>

      </div>

    </section>
  )
}

export default Experiences