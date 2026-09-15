import { useState } from 'react'
import translations from '../translations'

function Projects({ language }) {
  const [selectedProject, setSelectedProject] = useState(null)

  const t = translations[language].projects

  const projectDetails = {
    station: {
      title: t.station.title,
      description: t.station.modalDescription,
      technologies: 'PostgreSQL, SQL, Python, pgModeler'
    },

    linux: {
      title: t.linux.title,
      description: t.linux.modalDescription,
      technologies: 'Linux, Ubuntu, SSH, Apache'
    },

    eaux: {
      title: t.eaux.title,
      description: t.eaux.modalDescription,
      technologies: 'PostgreSQL, SQL, Python, pgModeler'
    },

    nuit: {
      title: t.nuit.title,
      description: t.nuit.modalDescription,
      technologies: 'HTML, CSS, JavaScript, Web'
    },

    findmyword: {
      title: t.findmyword.title,
      description: t.findmyword.modalDescription,
      technologies: 'Java, POO, UML'
    }
  }

  return (
    <section id="projects" className="projects">

      <div className="projects-title">
        <p>{t.label}</p>

        <h2>{t.title}</h2>

        <span>{t.description}</span>
      </div>


      <div className="projects-grid">

        {/* PROJET 01 */}
        <article className="project-card">

          <div className="project-number">
            01
          </div>

          <h3>{t.station.title}</h3>

          <p>{t.station.description}</p>

          <div className="project-tags">
            <span>PostgreSQL</span>
            <span>SQL</span>
            <span>Python</span>
            <span>pgModeler</span>
          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('station')}
          >
            {t.more}
          </button>

        </article>


        {/* PROJET 02 */}
        <article className="project-card">

          <div className="project-number">
            02
          </div>

          <h3>{t.linux.title}</h3>

          <p>{t.linux.description}</p>

          <div className="project-tags">
            <span>Linux</span>
            <span>Ubuntu</span>
            <span>SSH</span>
            <span>Apache</span>
          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('linux')}
          >
            {t.more}
          </button>

        </article>


        {/* PROJET 03 */}
        <article className="project-card">

          <div className="project-number">
            03
          </div>

          <h3>{t.eaux.title}</h3>

          <p>{t.eaux.description}</p>

          <div className="project-tags">
            <span>PostgreSQL</span>
            <span>SQL</span>
            <span>Python</span>
            <span>pgModeler</span>
          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('eaux')}
          >
            {t.more}
          </button>

        </article>


        {/* PROJET 04 */}
        <article className="project-card">

          <div className="project-number">
            04
          </div>

          <h3>{t.nuit.title}</h3>

          <p>{t.nuit.description}</p>

          <div className="project-tags">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Web</span>
          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('nuit')}
          >
            {t.more}
          </button>

        </article>


        {/* PROJET 05 */}
        <article className="project-card">

          <div className="project-number">
            05
          </div>

          <h3>{t.findmyword.title}</h3>

          <p>{t.findmyword.description}</p>

          <div className="project-tags">
            <span>Java</span>
            <span>POO</span>
            <span>UML</span>
          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('findmyword')}
          >
            {t.more}
          </button>

        </article>

      </div>


      {/* MODALE */}
      {selectedProject && (

        <div className="project-modal">

          <div className="project-modal-content">

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <p className="modal-label">
              {t.modalLabel}
            </p>

            <h2>
              {projectDetails[selectedProject].title}
            </h2>

            <p>
              {projectDetails[selectedProject].description}
            </p>

            <h3>
              {t.technologies}
            </h3>

            <div className="project-tags">

              {projectDetails[selectedProject].technologies
                .split(', ')
                .map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

            </div>

          </div>

        </div>

      )}

    </section>
  )
}

export default Projects