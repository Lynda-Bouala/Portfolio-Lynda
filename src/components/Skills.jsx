import translations from '../translations'

function Skills({ language }) {
  const t = translations[language].skills

  return (
    <section id="skills" className="skills">

      <div className="skills-title">
        <p>{t.label}</p>
        <h2>{t.title}</h2>
        <span>{t.description}</span>
      </div>

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-icon">💻</div>

          <h3>{t.development.title}</h3>

          <p>{t.development.description}</p>

          <div className="skill-tags">
            <span>Python</span>
            <span>Java</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>
        </div>


        <div className="skill-card">
          <div className="skill-icon">🗄️</div>

          <h3>{t.databases.title}</h3>

          <p>{t.databases.description}</p>

          <div className="skill-tags">
            <span>SQL</span>
            <span>PostgreSQL</span>
            <span>pgModeler</span>
          </div>
        </div>


        <div className="skill-card">
          <div className="skill-icon">🖥️</div>

          <h3>{t.systems.title}</h3>

          <p>{t.systems.description}</p>

          <div className="skill-tags">
            <span>Linux</span>
            <span>Ubuntu</span>
            <span>SSH</span>
            <span>Apache</span>
          </div>
        </div>


        <div className="skill-card">
          <div className="skill-icon">🛠️</div>

          <h3>{t.tools.title}</h3>

          <p>{t.tools.description}</p>

          <div className="skill-tags">
            <span>Git</span>
            <span>GitHub</span>
            <span>VS Code</span>
            <span>Linux</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills