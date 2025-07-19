import { useState, useEffect } from 'react'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'

function Home() {
  const [bootSequence, setBootSequence] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [showInterface, setShowInterface] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [isBlinking, setIsBlinking] = useState(false)
  const [isTalking, setIsTalking] = useState(false)
  const [isScanning, setIsScanning] = useState(false)

  const bootMessages = [
    'user@yifanook:~$ sudo systemctl start neural-network.service',
    'Loading personal data matrix... [████████████████████] 100%',
    'user@yifanook:~$ ./scan_creative_modules.sh',
    'Creative modules scan complete... [OK]',
    'user@yifanook:~$ npm start code-compiler',
    'Code compiler started successfully... [OK]',
    'user@yifanook:~$ ping quantum-link.dev',
    'PING quantum-link.dev: 64 bytes from reality: time=0.001ms',
    'user@yifanook:~$ whoami',
    'DIGITAL_ARCHITECT',
    'user@yifanook:~$ echo "Welcome to the digital dimension"',
    'Welcome to the digital dimension'
  ]

  const introText = "function life() { while(coffee.exists()) { code.write(); bugs.create(); bugs.fix(); repeat(); } }"

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < bootMessages.length) {
        setBootSequence(prev => [...prev, bootMessages[currentLine]])
        setCurrentLine(prev => prev + 1)
      } else if (!showInterface) {
        setTimeout(() => setShowInterface(true), 1000)
      }
    }, 400) // 加快执行速度，从800ms改为400ms

    return () => clearTimeout(timer)
  }, [currentLine, bootMessages.length, showInterface])

  useEffect(() => {
    if (showInterface && typedText.length < introText.length) {
      const timer = setTimeout(() => {
        setTypedText(introText.slice(0, typedText.length + 1))
      }, 30) // 加快打字速度
      return () => clearTimeout(timer)
    }
  }, [showInterface, typedText, introText])

  // 随机动画效果
  useEffect(() => {
    if (!showInterface) return

    const randomAnimation = () => {
      const rand = Math.random()
      
      if (rand > 0.8) {
        // 扫描模式 - 最酷的效果
        setIsScanning(true)
        setTimeout(() => setIsScanning(false), 1200)
      } else if (rand > 0.6) {
        // 眨眼
        setIsBlinking(true)
        setTimeout(() => setIsBlinking(false), 180)
      } else if (rand > 0.4) {
        // 说话
        setIsTalking(true)
        setTimeout(() => setIsTalking(false), 800)
      }
    }

    const timer = setInterval(randomAnimation, 2000 + Math.random() * 2000)  // 2-4秒触发一次，更自然
    return () => clearInterval(timer)
  }, [showInterface])

  if (!showInterface) {
    return (
      <div className="section" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: '#000'
      }}>
        <div className="container">
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '12px',
            lineHeight: '1.4'
          }}>
            {bootSequence.map((message, index) => (
              <div key={index} style={{
                color: message.includes('[OK]') ? '#00ff88' : '#ffffff',
                marginBottom: '10px',
                opacity: 0,
                animation: `fadeIn 0.5s ease ${index * 0.2}s forwards` // 加快动画速度
              }}>
                {message}
                {/* 光标只在最后一行显示 */}
                {index === bootSequence.length - 1 && (
                  <span style={{
                    color: '#00ff88',
                    animation: 'blink 1s infinite',
                    marginLeft: '5px'
                  }}>█</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
          
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div>
      {/* 主界面 */}
      <section id="home" className="section" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* 左侧：个人信息 */}
            <div>
              <h1 className="neon" style={{
                fontSize: '3rem',
                marginBottom: '1rem',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                DIGITAL ARCHITECT
              </h1>

              <div style={{
                background: 'rgba(0, 0, 0, 0.8)',
                border: '1px solid #00ff88',
                padding: '20px',
                marginBottom: '2rem',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '12px'
              }}>
                <div style={{ color: '#00ff88', marginBottom: '10px' }}>
                  {'>'} cat ./identity.txt
                </div>
                <div style={{ color: '#ffffff', lineHeight: '1.6' }}>
                  {typedText}
                  <span style={{
                    animation: 'blink 1s infinite',
                    color: '#00ff88'
                  }}>█</span>
                </div>
              </div>

              <div style={{ 
                color: '#666', 
                fontSize: '14px',
                fontFamily: 'JetBrains Mono, monospace',
                marginTop: '2rem'
              }}>
                {'>'} scroll --down to explore more content...
              </div>
            </div>

            {/* 右侧：3D 头像区域 */}
            <div style={{
              position: 'relative',
              height: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '300px',
                height: '300px',
                background: 'linear-gradient(45deg, #ff0088, #00ff88)',
                borderRadius: '50%',
                position: 'relative',
                animation: 'rotate 20s linear infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '280px',
                  height: '280px',
                  background: '#0a0a0a',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <pre style={{
                    color: '#00ff88',
                    fontSize: '20px',
                    fontFamily: 'JetBrains Mono, monospace',
                    lineHeight: '1',
                    textAlign: 'center',
                    margin: 0,
                    transition: 'all 0.15s ease-in-out'
                  }}>
{`  ${isScanning ? '▲' : 'Y'}   ${isScanning ? '▲' : 'Y'}
 ┌─────────┐
 │ ${isScanning ? '▓' : isBlinking ? '─' : '◉'} ┃ ${isScanning ? '▓' : isBlinking ? '─' : '◉'} │
 │   ${isTalking ? '>' : '<'}   │
 └─────────┘`}
                  </pre>
                </div>
              </div>

              {/* 环绕的数据点 */}
              {[...Array(8)].map((_, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  width: '10px',
                  height: '10px',
                  background: '#00ff88',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateX(200px) translateY(-50%)`,
                  animation: `orbit 10s linear infinite ${i * 0.5}s`,
                  boxShadow: '0 0 10px #00ff88'
                }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 其他页面作为sections */}
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(200px) translateY(-50%); }
          to { transform: rotate(360deg) translateX(200px) translateY(-50%); }
        }
        
        @keyframes loadBar {
          to { transform: translateX(0); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default Home
