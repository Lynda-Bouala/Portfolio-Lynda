import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/about'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Parcours from './components/Parcours'
import Motivation from './components/Motivation'
import Experiences from './components/Experiences'
import Interests from './components/Interests'
import Langues from './components/Langues'
import CV from './components/CV'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LanguagePopup from './components/LanguagePopup'

function App() {
  const [language, setLanguage] = useState(
  localStorage.getItem('language') || 'fr'
)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y
        }}
      ></div>

      <Navbar language={language} />
<LanguagePopup setLanguage={setLanguage} />

<main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Parcours language={language} />
        <Motivation language={language} />
        <Experiences language={language} />
        <Interests language={language} />
        <Langues language={language} />
        <CV language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </main>
    </>
  )
}

export default App