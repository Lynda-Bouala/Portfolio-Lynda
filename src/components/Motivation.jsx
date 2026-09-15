import translations from '../translations'

function Motivation({ language }) {

  const t = translations[language].motivation

  return (

    <section id="motivation" className="motivation">

      <div className="motivation-title">

        <p>{t.label}</p>

        <h2>{t.title}</h2>

      </div>


      <div className="motivation-content">

        <div className="motivation-text">

          <p>
            {t.paragraph1}
          </p>

          <p>
            {t.paragraph2}
          </p>

          <p>
            {t.paragraph3}
          </p>

        </div>


        <div className="motivation-points">

          <div className="motivation-card">

            <span>💡</span>

            <div>

              <h3>{t.points.curious.title}</h3>

              <p>
                {t.points.curious.description}
              </p>

            </div>

          </div>


          <div className="motivation-card">

            <span>🎯</span>

            <div>

              <h3>{t.points.motivated.title}</h3>

              <p>
                {t.points.motivated.description}
              </p>

            </div>

          </div>


          <div className="motivation-card">

            <span>🤝</span>

            <div>

              <h3>{t.points.teamwork.title}</h3>

              <p>
                {t.points.teamwork.description}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Motivation