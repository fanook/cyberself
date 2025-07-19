import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // 监听滚动位置，更新活跃section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200 // 偏移量

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getPageTitle = () => {
    switch (activeSection) {
      case 'home': return 'NEURAL_INTERFACE.exe'
      case 'about': return 'IDENTITY_MATRIX.dat'
      case 'projects': return 'CODE_ARSENAL.bin'
      case 'contact': return 'TRANSMISSION.log'
      default: return 'SYSTEM.404'
    }
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="terminal-prompt">
          {getPageTitle()} | {currentTime.toLocaleTimeString()}
        </div>
        <nav className="nav">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            yifanook.net
          </a>
          <ul className="nav-links">
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
              >
                ./home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
              >
                ./whoami
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
              >
                ./ls projects/
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                ./ping contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header