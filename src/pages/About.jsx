import { useState, useEffect } from 'react'

function About() {
  const [matrixRain, setMatrixRain] = useState([])

  const experiences = [
    {
      role: "product.creator.async()",
      company: "/future/innovation/lab",
      period: "age(27) - age(∞).loading...",
      description: "async function createMagic() { while(true) { await inspire(); build(); impact(); } }",
      achievements: ["apps.meaningful++", "users.smile.trigger()", "world.change.contribute()"]
    },
    {
      role: "senior.game.developer()",
      company: "/realm/interactive/studios",
      period: "age(25) - age(27).current",
      description: "while(life.balance()) { code.craft(); mountain.climb(); lens.capture(); }",
      achievements: ["body.strength.level++", "camera.skills.unlock()", "peak.conquered += 0"]
    },
    {
      role: "game.engine.architect()",
      company: "/digital/entertainment/corp",
      period: "age(22) - age(25).evolve",
      description: "for(let year = 0; year < 3; year++) { worlds.create(); players.delight(); }",
      achievements: ["fps.optimize() > 60", "memory.leak = null", "if err != nil"]
    },
    {
      role: "student.prototype.exe",
      company: "/university/knowledge/base",
      period: "age(0) - age(22).graduate",
      description: "while(knowledge.isEmpty()) { learn(); practice(); dream(); }",
      achievements: ["programming.skills.unlock()", "foundation.solid = true", "future.vision.set()"]
    }
  ]

  useEffect(() => {
    // 创建矩阵雨效果
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const drops = []

    for (let i = 0; i < 50; i++) {
      drops.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        char: chars[Math.floor(Math.random() * chars.length)],
        speed: Math.random() * 2 + 1
      })
    }

    setMatrixRain(drops)

    const interval = setInterval(() => {
      setMatrixRain(prev => prev.map(drop => ({
        ...drop,
        y: drop.y > 100 ? -10 : drop.y + drop.speed,
        char: Math.random() > 0.95 ? chars[Math.floor(Math.random() * chars.length)] : drop.char
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      {/* 矩阵雨背景 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.1
      }}>
        {matrixRain.map(drop => (
          <div
            key={drop.id}
            style={{
              position: 'absolute',
              left: `${drop.x}%`,
              top: `${drop.y}%`,
              color: '#00ff88',
              fontSize: '14px',
              fontFamily: 'JetBrains Mono, monospace',
              animation: 'fadeInOut 2s infinite'
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>

      {/* 身份验证界面 */}
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div style={{
            background: 'rgba(0, 0, 0, 0.9)',
            border: '2px solid #00ff88',
            padding: '30px',
            marginBottom: '3rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            <div style={{ color: '#00ff88', marginBottom: '15px' }}>
              {'>'} whoami --detailed --philosophy
            </div>
            <div style={{ color: '#ffffff', fontSize: '12px', lineHeight: '1.4' }}>
              User: DIGITAL_ARCHITECT<br />
              Status: ONLINE<br />
              Location: /dev/null && /dev/random<br />
              Mission: while(true) {`{ create(); }`}<br />
              Philosophy: if (code.isArt()) return true;<br />
              Runtime: Exception in thread "life": NullPointerException<br />
              Memory: Stack overflow in dreams.exe<br />
              Process: sudo rm -rf /problems/*
            </div>
          </div>

          <h1 className="glitch neon" data-text="IDENTITY MATRIX" style={{
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '3rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            IDENTITY MATRIX
          </h1>
        </div>
      </section>




      {/* 职业轨迹 */}
      <section className="section">
        <div className="container">
          <h2 className="neon" style={{
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '2rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {'<'} CAREER_TIMELINE {'/>'}
          </h2>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {experiences.map((exp, index) => (
              <div key={index} className="cyber-card" style={{
                marginBottom: '2rem',
                position: 'relative',
                paddingLeft: '60px'
              }}>
                {/* 时间线点 */}
                <div style={{
                  position: 'absolute',
                  left: '20px',
                  top: '30px',
                  width: '20px',
                  height: '20px',
                  background: '#00ff88',
                  borderRadius: '50%',
                  boxShadow: '0 0 20px #00ff88'
                }} />

                {/* 时间线连接线 */}
                {index < experiences.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    left: '29px',
                    top: '50px',
                    width: '2px',
                    height: '100px',
                    background: 'linear-gradient(to bottom, #00ff88, transparent)'
                  }} />
                )}

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{
                      color: '#00ff88',
                      marginBottom: '0.5rem',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      color: '#ff0088',
                      fontSize: '14px',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {exp.company}
                    </p>
                  </div>
                  <span style={{
                    color: '#666',
                    fontSize: '12px',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    {exp.period}
                  </span>
                </div>

                <p style={{
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                  color: '#ccc'
                }}>
                  {exp.description}
                </p>

                <div>
                  <div style={{
                    color: '#00ff88',
                    fontSize: '12px',
                    marginBottom: '10px',
                    fontFamily: 'JetBrains Mono, monospace'
                  }}>
                    {'>'} ./achievements --list
                  </div>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} style={{
                        color: '#ccc',
                        fontSize: '14px',
                        marginBottom: '5px',
                        paddingLeft: '20px',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#00ff88'
                        }}>
                          ▶
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技能矩阵 */}
      <section className="section">
        <div className="container">
          <h2 className="neon" style={{
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '2rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {'<'} SKILL_MATRIX {'/>'}
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                title: 'FRONTEND_WIZARD',
                skills: ['div.center-me', 'useState is life', 'CSS-in-JS chaos', 'async/await heaven', 'bundle.js: 2MB'],
                level: 95
              },
              {
                title: 'BACKEND_NINJA',
                skills: ['null pointer panic', 'goroutine leak', 'SELECT * FROM hell', 'docker-compose up -d', '500 Internal Mood'],
                level: 88
              },
              {
                title: 'MOBILE_SURVIVOR',
                skills: ['Xcode: 40GB', 'Android: API 33', 'Flutter: Hot Reload', 'iOS: Rejected', 'Gradle: Building...'],
                level: 82
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
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes loadBar {
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

export default About