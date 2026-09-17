import { useState } from 'react'

import translations from '../translations'

function Projects({ language }) {

  const [selectedProject, setSelectedProject] = useState(null)

  const t = translations[language].projects

  const projectDetails = {

    database: {
      title: t.database.title,
      description: t.database.modalDescription,
      technologies: 'PostgreSQL, SQL, Python, pgModeler, Grafana',
      sae104: t.database.sae104,
      sae204: t.database.sae204,
      skills: t.database.skills,
    },

    linux: {
      title: t.linux.title,
      description: t.linux.modalDescription,
      technologies:
        'Linux, Kubuntu, Apache, PHP, PostgreSQL, MariaDB, SSH, FTP, Wireshark, VirtualBox, Marionnet',
      sae103: t.linux.sae103,
      sae203: t.linux.sae203,
      skills: t.linux.skills,
    },

    nuit: {
      title: t.nuit.title,
      description: t.nuit.modalDescription,
      context: t.nuit.context,
      mission: t.nuit.mission,
      features: t.nuit.features,
      skills: t.nuit.skills,
      technologies: 'HTML, CSS, JavaScript',
      link: t.nuit.link,
      linkButton: t.nuit.linkButton,
    },

    findmyword: {
      title: t.findmyword.title,
      description: t.findmyword.modalDescription,
      context: t.findmyword.context,
      features: t.findmyword.features,
      architecture: t.findmyword.architecture,
      classes: t.findmyword.classes,
      skills: t.findmyword.skills,
      technologies: 'Java, POO, UML, JSON',
      report: t.findmyword.report,
      reportButton: t.findmyword.reportButton,
    },

    // PROJET 05 — POUDLARD
    poudlard: {
      title: t.poudlard.title,
      description: t.poudlard.modalDescription,
      context: t.poudlard.context,
      features: t.poudlard.features,
      architecture: t.poudlard.architecture,
      skills: t.poudlard.skills,
      technologies:
        'Python, Algorithmique, Dictionnaires, JSON, Tests unitaires',
    },

  }

  return (

    <section id="projects" className="projects">

      {/* TITRE DE LA SECTION */}

      <div className="projects-title">

        <p>{t.label}</p>

        <h2>{t.title}</h2>

        <span>{t.description}</span>

      </div>


      {/* GRILLE DES PROJETS */}

      <div className="projects-grid">


        {/* PROJET 01 — BASES DE DONNÉES */}

        <article className="project-card">

          <div className="project-number">
            01
          </div>

          <h3>{t.database.title}</h3>

          <p>{t.database.description}</p>

          <div className="project-tags">

            <span>PostgreSQL</span>
            <span>SQL</span>
            <span>Python</span>
            <span>pgModeler</span>
            <span>Grafana</span>

          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('database')}
          >
            {t.more}
          </button>

        </article>


        {/* PROJET 02 — ENVIRONNEMENT LINUX */}

        <article className="project-card">

          <div className="project-number">
            02
          </div>

          <h3>{t.linux.title}</h3>

          <p>{t.linux.description}</p>

          <div className="project-tags">

            <span>Linux</span>
            <span>Apache</span>
            <span>MariaDB</span>
            <span>SSH</span>
            <span>FTP</span>

          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('linux')}
          >
            {t.more}
          </button>

        </article>


        {/* PROJET 03 — LA NUIT DE L'INFO */}

        <article className="project-card">

          <div className="project-number">
            03
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


        {/* PROJET 04 — FINDMYWORD */}

        <article className="project-card">

          <div className="project-number">
            04
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


        {/* PROJET 05 — POUDLARD */}

        <article className="project-card">

          <div className="project-number">
            05
          </div>

          <h3>{t.poudlard.title}</h3>

          <p>{t.poudlard.description}</p>

          <div className="project-tags">

            <span>Python</span>
            <span>Algorithmique</span>
            <span>JSON</span>

          </div>

          <button
            className="project-link"
            onClick={() => setSelectedProject('poudlard')}
          >
            {t.more}
          </button>

        </article>


      </div>


      {/* ========================= */}
      {/* MODALE */}
      {/* ========================= */}

      {selectedProject && (

        <div className="project-modal">

          <div className="project-modal-content">


            {/* BOUTON FERMER */}

            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>


            {/* LABEL */}

            <p className="modal-label">
              {t.modalLabel}
            </p>


            {/* TITRE */}

            <h2>
              {projectDetails[selectedProject].title}
            </h2>


            {/* DESCRIPTION */}

            <p>
              {projectDetails[selectedProject].description}
            </p>


            {/* ========================= */}
            {/* DÉTAILS BASES DE DONNÉES */}
            {/* ========================= */}

            {selectedProject === 'database' && (

              <>

                <h3>
                  SAE104
                </h3>

                <p>
                  {projectDetails[selectedProject].sae104}
                </p>


                <h3>
                  SAE204
                </h3>

                <p>
                  {projectDetails[selectedProject].sae204}
                </p>


                <h3>
                  Compétences mobilisées
                </h3>

                <p>
                  {projectDetails[selectedProject].skills}
                </p>

              </>

            )}


            {/* ========================= */}
            {/* DÉTAILS ENVIRONNEMENT LINUX */}
            {/* ========================= */}

            {selectedProject === 'linux' && (

              <>

                <h3>
                  SAÉ 1.03 — Installation d’un poste de développement
                </h3>

                <p>
                  {projectDetails[selectedProject].sae103}
                </p>


                <h3>
                  SAÉ 2.03 — Installation de services réseaux
                </h3>

                <p>
                  {projectDetails[selectedProject].sae203}
                </p>


                <h3>
                  Compétences mobilisées
                </h3>

                <p>
                  {projectDetails[selectedProject].skills}
                </p>

              </>

            )}


            {/* ========================= */}
            {/* DÉTAILS LA NUIT DE L'INFO */}
            {/* ========================= */}

            {selectedProject === 'nuit' && (

              <>

                <h3>
                  Contexte du projet
                </h3>

                <p>
                  {projectDetails[selectedProject].context}
                </p>


                <h3>
                  Mission
                </h3>

                <p>
                  {projectDetails[selectedProject].mission}
                </p>


                <h3>
                  Fonctionnalités
                </h3>

                <ul className="project-features">

                  {projectDetails[selectedProject].features.map(
                    (feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    )
                  )}

                </ul>


                <h3>
                  Compétences mobilisées
                </h3>

                <p>
                  {projectDetails[selectedProject].skills}
                </p>

              </>

            )}


            {/* ========================= */}
            {/* DÉTAILS FINDMYWORD */}
            {/* ========================= */}

            {selectedProject === 'findmyword' && (

              <>

                <h3>
                  Contexte du projet
                </h3>

                <p>
                  {projectDetails[selectedProject].context}
                </p>


                <h3>
                  Fonctionnalités
                </h3>

                <ul className="project-features">

                  {projectDetails[selectedProject].features.map(
                    (feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    )
                  )}

                </ul>


                <h3>
                  Architecture
                </h3>

                <p>
                  {projectDetails[selectedProject].architecture}
                </p>


                <h3>
                  Principales classes
                </h3>

                <p>
                  {projectDetails[selectedProject].classes}
                </p>


                <h3>
                  Compétences mobilisées
                </h3>

                <p>
                  {projectDetails[selectedProject].skills}
                </p>

              </>

            )}


            {/* ========================= */}
            {/* DÉTAILS POUDLARD */}
            {/* ========================= */}

            {selectedProject === 'poudlard' && (

              <>

                <h3>
                  Contexte du projet
                </h3>

                <p>
                  {projectDetails[selectedProject].context}
                </p>


                <h3>
                  Fonctionnalités
                </h3>

                <ul className="project-features">

                  {projectDetails[selectedProject].features.map(
                    (feature) => (
                      <li key={feature}>
                        {feature}
                      </li>
                    )
                  )}

                </ul>


                <h3>
                  Architecture
                </h3>

                <p>
                  {projectDetails[selectedProject].architecture}
                </p>


                <h3>
                  Compétences mobilisées
                </h3>

                <p>
                  {projectDetails[selectedProject].skills}
                </p>

              </>

            )}


            {/* ========================= */}
            {/* TECHNOLOGIES */}
            {/* ========================= */}

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


            {/* ========================= */}
            {/* LIEN LA NUIT DE L'INFO */}
            {/* ========================= */}

            {projectDetails[selectedProject].link && (

              <a
                href={projectDetails[selectedProject].link}
                target="_blank"
                rel="noreferrer"
                className="project-report-link"
              >
                {projectDetails[selectedProject].linkButton}
              </a>

            )}


            {/* ========================= */}
            {/* RAPPORT FINDMYWORD */}
            {/* ========================= */}

            {projectDetails[selectedProject].report && (

              <a
                href={projectDetails[selectedProject].report}
                target="_blank"
                rel="noreferrer"
                className="project-report-link"
              >
                {projectDetails[selectedProject].reportButton}
              </a>

            )}

          </div>

        </div>

      )}

    </section>

  )
}

export default Projects