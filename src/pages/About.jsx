import { useState, useEffect } from 'react'

function About() {
  const [activePhilosophy, setActivePhilosophy] = useState(0)
  const [matrixRain, setMatrixRain] = useState([])

  const philosophies = [
    {
      title: "代码即艺术",
      content: "我相信编程不仅仅是逻辑的堆砌，更是一种艺术表达。每一行代码都应该优雅、简洁，如同诗歌般富有韵律。好的代码不仅能解决问题，更能启发思考。",
      icon: "🎨"
    },
    {
      title: "技术为人服务",
      content: "技术的终极目标是让人类生活更美好。我开发的每一个应用都致力于解决真实的问题，提升用户体验，而不是为了炫技而存在。",
      icon: "🤝"
    },
    {
      title: "持续进化",
      content: "在这个快速变化的数字时代，停滞就意味着倒退。我始终保持学习的热情，拥抱新技术，同时也不忘记基础的重要性。",
      icon: "🚀"
    },
    {
      title: "开源精神",
      content: "知识因分享而增值。我积极参与开源社区，相信协作的力量能够创造出超越个人能力的伟大作品。",
      icon: "🌍"
    }
  ]

  const experiences = [
    {
      role: "首席技术架构师",
      company: "QuantumTech Labs",
      period: "2023 - 至今",
      description: "领导技术团队开发下一代AI驱动的应用平台，负责整体架构设计和技术决策。",
      achievements: ["设计了支持百万用户的微服务架构", "将系统响应时间优化了85%", "建立了完整的DevOps流程"]
    },
    {
      role: "高级全栈工程师",
      company: "CyberInnovate Inc.",
      period: "2021 - 2023",
      description: "专注于移动应用开发和跨平台解决方案，参与多个获奖产品的核心开发。",
      achievements: ["开发的应用获得Google Play年度最佳应用", "建立了公司的移动开发标准", "指导了15名初级开发者"]
    },
    {
      role: "创新实验室研究员",
      company: "TechFuture Research",
      period: "2019 - 2021",
      description: "探索前沿技术在实际应用中的可能性，专注于AR/VR和机器学习领域。",
      achievements: ["发表了3篇技术论文", "获得2项技术专利", "原型产品获得CES创新奖"]
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
            <div style={{ color: '#ffffff', fontSize: '14px', lineHeight: '1.6' }}>
              User: DIGITAL_ARCHITECT<br/>
              Status: ONLINE<br/>
              Location: 数字维度 ∞<br/>
              Mission: 用代码改变世界<br/>
              Philosophy: 技术与人文的完美融合
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

      {/* 核心理念 */}
      <section className="section">
        <div className="container">
          <h2 className="neon" style={{ 
            textAlign: 'center',
            marginBottom: '3rem',
            fontSize: '2rem',
            fontFamily: 'JetBrains Mono, monospace'
          }}>
            {'<'} CORE_BELIEFS {'/>'} 
          </h2>

          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '3rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* 理念导航 */}
            <div>
              {philosophies.map((philosophy, index) => (
                <div
                  key={index}
                  onClick={() => setActivePhilosophy(index)}
                  className="cyber-card"
                  style={{
                    marginBottom: '1rem',
                    cursor: 'none',
                    background: activePhilosophy === index ? 'rgba(0, 255, 136, 0.1)' : 'rgba(0, 0, 0, 0.8)',
                    border: activePhilosophy === index ? '2px solid #00ff88' : '1px solid #333',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <span style={{ fontSize: '2rem' }}>{philosophy.icon}</span>
                    <span style={{ 
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '14px',
                      color: activePhilosophy === index ? '#00ff88' : '#fff'
                    }}>
                      {philosophy.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* 理念内容 */}
            <div className="cyber-card" style={{ minHeight: '300px' }}>
              <h3 style={{ 
                color: '#00ff88',
                marginBottom: '1rem',
                fontSize: '1.5rem',
                fontFamily: 'JetBrains Mono, monospace'
              }}>
                {philosophies[activePhilosophy].icon} {philosophies[activePhilosophy].title}
              </h3>
              <p style={{ 
                lineHeight: '1.8',
                fontSize: '16px',
                color: '#ccc'
              }}>
                {philosophies[activePhilosophy].content}
              </p>
            </div>
          </div>
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

      <style jsx>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}

export default About