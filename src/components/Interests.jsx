import translations from '../translations'

function Interests({ language }) {
  const t = translations[language].interests

  const interests = [
    {
      icon: '🏀',
      title: t.basket.title,
      description: t.basket.description,
      tags: t.basket.tags,
    },
    {
      icon: '🧮',
      title: t.math.title,
      description: t.math.description,
      tags: t.math.tags,
    },
    {
      icon: '🍳',
      title: t.cooking.title,
      description: t.cooking.description,
      tags: t.cooking.tags,
    },
    {
      icon: '📚',
      title: t.reading.title,
      description: t.reading.description,
      tags: t.reading.tags,
    },
    {
      icon: '🎮',
      title: t.gaming.title,
      description: t.gaming.description,
      tags: t.gaming.tags,
    },
    {
      icon: '🏗️',
      title: t.civil.title,
      description: t.civil.description,
      tags: t.civil.tags,
    },
    {
      icon: '🎬',
      title: t.cinema.title,
      description: t.cinema.description,
      tags: t.cinema.tags,
    },
  ]

  return (
    <section id="interests" className="interests">
      <div className="interests-title">
        <p>{t.label}</p>
        <h2>{t.title}</h2>
        <span>{t.description}</span>
      </div>

      <div className="interests-grid">
        {interests.map((interest) => (
          <article className="interest-card" key={interest.title}>
            <div className="interest-icon">
              {interest.icon}
            </div>

            <h3>{interest.title}</h3>

            <p>{interest.description}</p>

            <div className={`interest-tags ${language}`}>
              {interest.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Interests