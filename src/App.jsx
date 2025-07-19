import { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import './App.css'

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateCursor)
    
    // 为所有可交互元素添加悬停效果
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className="App">
      {/* 自定义光标 */}
      <div 
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPos.x - 10,
          top: cursorPos.y - 10
        }}
      />
      
      {/* 背景动画 */}
      <div className="bg-animation" />
      <div className="grid-bg" />
      
      <Header />
      <main>
        <Home />
      </main>
    </div>
  )
}

export default App