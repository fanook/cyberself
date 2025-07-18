import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const location = useLocation()
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const getPageTitle = () => {
    switch(location.pathname) {
      case '/': return 'NEURAL_INTERFACE.exe'
      case '/about': return 'IDENTITY_MATRIX.dat'
      case '/projects': return 'CODE_ARSENAL.bin'
      case '/contact': return 'TRANSMISSION.log'
      default: return 'SYSTEM.404'
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="terminal-prompt">
          {getPageTitle()} | {currentTime.toLocaleTimeString()}
        </div>
        <nav className="nav">
          <Link to="/" className="logo">
            NEURAL.NET
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
              >
                ./home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
              >
                ./identity
              </Link>
            </li>
            <li>
              <Link 
                to="/projects" 
                className={location.pathname === '/projects' ? 'active' : ''}
              >
                ./arsenal
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                ./connect
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header