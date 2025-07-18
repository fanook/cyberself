import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [bootSequence, setBootSequence] = useState([])
  const [currentLine, setCurrentLine] = useState(0)
  const [showInterface, setShowInterface] = useState(false)
  const [typedText, setTypedText] = useState('')

  const bootMessages = [
    '> 初始化神经网络连接...',
    '> 加载个人数据矩阵...',
    '> 扫描创意模块... [OK]',
    '> 启动代码编译器... [OK]',
    '> 建立量子通信链路...',
    '> 系统就绪。欢迎进入数字维度。',
    '> 身份验证：创造者模式激活'
  ]

  const introText = "我是一个数字世界的建筑师，用代码编织现实与虚拟的桥梁。在这个赛博空间里，每一行代码都是我思想的延伸，每一个应用都承载着改变世界的可能。"

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < bootMessages.length) {
        setBootSequence(prev => [...prev, bootMessages[currentLine]])
        setCurrentLine(prev => prev + 1)
      } else if (!showInterface) {
        setTimeout(() => setShowInterface(true), 1000)
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [currentLine, bootMessages.length, showInterface])

  useEffect(() => {
    if (showInterface && typedText.length < introText.length) {
      const timer = setTimeout(() => {
        setTypedText(introText.slice(0, typedText.length + 1))
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [showInterface, typedText, introText])

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
            fontSize: '16px',
            lineHeight: '1.8'
          }}>
            {bootSequence.map((message, index) => (
              <div key={index} style={{ 
                color: message.includes('[OK]') ? '#00ff88' : '#ffffff',
                marginBottom: '10px',
                opacity: 0,
                animation: `fadeIn 0.5s ease ${index * 0.3}s forwards`
              }}>
                {message}
              </div>
            ))}
            <div style={{ 
              color: '#00ff88', 
              animation: 'blink 1s infinite',
              display: 'inline-block'
            }}>
              █
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div>
      {/* 主界面 */}
      <section className="section" style={{ 
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
              <h1 className="glitch neon" data-text="DIGITAL ARCHITECT" style={{ 
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
                fontSize: '14px'
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

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="terminal-btn">
                  ./explore_identity
                </Link>
                <Link to="/projects" className="terminal-btn">
                  ./view_arsenal
                </Link>
                <Link to="/contact" className="terminal-btn">
                  ./establish_connection
                </Link>
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
                  justifyContent: 'center',
                  fontSize: '4rem'
                }}>
                  🤖
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

      {/* 技能矩阵 */}
      <section className="section">
        <div className="container">
          <h2 className="neon" style={{ 
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '2.5rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {'<'} SKILL_MATRIX {'/>'} 
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: 'FRONTEND_CORE',
                skills: ['React.js', 'Vue.js', 'TypeScript', 'WebGL', 'Three.js'],
                level: 95
              },
              {
                title: 'BACKEND_ENGINE',
                skills: ['Node.js', 'Python', 'Go', 'Docker', 'Kubernetes'],
                level: 88
              },
              {
                title: 'MOBILE_FORGE',
                skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin'],
                level: 82
              },
              {
                title: 'AI_NEURAL',
                skills: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Computer Vision'],
                level: 76
              }
            ].map((category, index) => (
              <div key={index} className="cyber-card">
                <h3 style={{ 
                  color: '#00ff88',
                  marginBottom: '1rem',
                  fontFamily: 'JetBrains Mono, monospace'
                }}>
                  {category.title}
                </h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ 
                    background: '#333',
                    height: '8px',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      background: 'linear-gradient(90deg, #ff0088, #00ff88)',
                      height: '100%',
                      width: `${category.level}%`,
                      animation: `loadBar 2s ease ${index * 0.5}s forwards`,
                      transform: 'translateX(-100%)'
                    }} />
                  </div>
                  <div style={{ 
                    textAlign: 'right',
                    fontSize: '12px',
                    color: '#666',
                    marginTop: '5px'
                  }}>
                    {category.level}%
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {category.skills.map(skill => (
                    <span key={skill} style={{
                      background: 'rgba(0, 255, 136, 0.1)',
                      border: '1px solid #00ff88',
                      padding: '4px 8px',
                      fontSize: '12px',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
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
      `}</style>
    </div>
  )
}

export default Home