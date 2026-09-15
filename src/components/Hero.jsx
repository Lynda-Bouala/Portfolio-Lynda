import { useEffect, useState } from 'react'
import lyndaPhoto from '../assets/lynda.jpg'
import translations from '../translations'

function Hero({ language }) {
  const t = translations[language].hero

  const texts = language === 'fr'
    ? [
        'Étudiante en informatique',
        'Développeuse en devenir',
        'Passionnée par les technologies',
      ]
    : [
        'Computer Science Student',
        'Future Developer',
        'Passionate about Technology',
      ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const speed = deleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayText(
          currentText.substring(0, displayText.length + 1)
        )

        if (displayText.length + 1 === currentText.length) {
          setTimeout(() => setDeleting(true), 1200)
        }
      } else {
        setDisplayText(
          currentText.substring(0, displayText.length - 1)
        )

        if (displayText.length === 0) {
          setDeleting(false)
          setTextIndex((textIndex + 1) % texts.length)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, deleting, textIndex, texts])

  return (
    <section id="home" className="hero">

      <div className="hero-text">

        <p>{t.greeting}</p>

        <h1>
          {displayText}
          <span className="typing-cursor">|</span>
        </h1>

        <p>
          {t.description}
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            {t.projectsButton}
          </a>

          <a href="#contact">
            {t.contactButton}
          </a>
        </div>

      </div>

      <div className="hero-photo">
        <img
          src={lyndaPhoto}
          alt="Lynda Bouala"
        />
      </div>

    </section>
  )
}

export default Hero