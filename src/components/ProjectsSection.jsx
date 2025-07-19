import { useState, useEffect } from 'react'

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [showContent, setShowContent] = useState(false)
  const [typedCommand, setTypedCommand] = useState('')
  const [typedContent, setTypedContent] = useState('')
  const [isTypingCommand, setIsTypingCommand] = useState(false)
  const [isTypingContent, setIsTypingContent] = useState(false)

  const apps = [
    {
      id: 1,
      name: "NeuroSync",
      category: "PRODUCTIVITY",
      description: "AI驱动的思维导图应用，帮助用户可视化复杂想法并建立知识连接。支持实时协作和智能建议。",
      icon: "🧠",
      platforms: {
        ios: "https://apps.apple.com/app/neurosync",
        android: "https://play.google.com/store/apps/details?id=com.neurosync",
        web: "https://neurosync.app"
      },
      tech: ["React Native", "TensorFlow", "Node.js", "WebSocket"],
      downloads: "50K+",
      rating: 4.8,
      status: "LIVE"
    },
    {
      id: 2,
      name: "CyberFit",
      category: "HEALTH",
      description: "赛博朋克风格的健身追踪应用，将锻炼游戏化。通过AR技术提供沉浸式训练体验。",
      icon: "💪",
      platforms: {
        ios: "https://apps.apple.com/app/cyberfit",
        android: "https://play.google.com/store/apps/details?id=com.cyberfit",
        vr: "https://oculus.com/experiences/cyberfit"
      },
      tech: ["Unity", "ARKit", "Firebase", "HealthKit"],
      downloads: "25K+",
      rating: 4.6,
      status: "LIVE"
    },
    {
      id: 3,
      name: "CodeFlow",
      category: "DEVELOPER",
      description: "移动端代码编辑器，支持多种编程语言。集成AI代码补全和实时协作功能。",
      icon: "⚡",
      platforms: {
        ios: "https://apps.apple.com/app/codeflow",
        android: "https://play.google.com/store/apps/details?id=com.codeflow",
        web: "https://codeflow.dev"
      },
      tech: ["Flutter", "Monaco Editor", "Docker", "OpenAI API"],
      downloads: "100K+",
      rating: 4.9,
      status: "LIVE"
    },
    {
      id: 4,
      name: "QuantumChat",
      category: "SOCIAL",
      description: "端到端加密的即时通讯应用，采用量子加密技术确保绝对安全的通信。",
      icon: "🔐",
      platforms: {
        ios: "https://apps.apple.com/app/quantumchat",
        android: "https://play.google.com/store/apps/details?id=com.quantumchat",
        desktop: "https://quantumchat.io/download"
      },
      tech: ["Electron", "WebRTC", "Rust", "Quantum Cryptography"],
      downloads: "75K+",
      rating: 4.7,
      status: "BETA"
    },
    {
      id: 5,
      name: "MetaVerse Builder",
      category: "CREATIVE",
      description: "3D虚拟世界构建工具，让用户轻松创建和分享自己的元宇宙空间。",
      icon: "🌐",
      platforms: {
        web: "https://metaverse-builder.io",
        vr: "https://oculus.com/experiences/metaverse-builder"
      },
      tech: ["Three.js", "WebXR", "Blockchain", "IPFS"],
      downloads: "15K+",
      rating: 4.5,
      status: "DEVELOPMENT"
    }
  ]

  const categories = ['ALL', 'PRODUCTIVITY', 'HEALTH', 'DEVELOPER', 'SOCIAL', 'CREATIVE']
  
  const command = 'ls -la ./digital_arsenal/'
  const content = `total ${apps.length} applications found
drwxr-xr-x ${apps.filter(a => a.status === 'LIVE').length} live_apps
drwxr-xr-x ${apps.filter(a => a.status === 'BETA').length} beta_releases
drwxr-xr-x ${apps.filter(a => a.status === 'DEVELOPMENT').length} in_development`
  
  const filteredApps = selectedCategory === 'ALL' 
    ? apps 
    : apps.filter(app => app.category === selectedCategory)

  const getPlatformIcon = (platform) => {
    const icons = {
      ios: '📱',
      android: '🤖',
      web: '🌐',
      desktop: '💻',
      vr: '🥽'
    }
    return icons[platform] || '📦'
  }

  const getStatusColor = (status) => {
    const colors = {
      LIVE: '#00ff88',
      BETA: '#ffaa00',
      DEVELOPMENT: '#ff0088'
    }
    return colors[status] || '#666'
  }

  // 打字机效果  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isTypingCommand) {
          setIsTypingCommand(true)
          let i = 0
          const typeCommand = () => {
            if (i < command.length) {
              setTypedCommand(command.slice(0, i + 1))
              i++
              setTimeout(typeCommand, 30)
            } else {
              setTimeout(() => {
                setIsTypingContent(true)
                let j = 0
                const typeContent = () => {
                  if (j < content.length) {
                    setTypedContent(content.slice(0, j + 1))
                    j++
                    setTimeout(typeContent, 20)
                  } else {
                    setTimeout(() => setShowContent(true), 500)
                  }
                }
                typeContent()
              }, 800)
            }
          }
          typeCommand()
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isTypingCommand, command, content])

  return (
    <section id="projects" style={{ minHeight: '100vh' }}>
      {/* 项目展示 */}
      <div className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 className="neon" style={{ 
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '2rem',
            fontFamily: 'JetBrains Mono, monospace',
            opacity: isTypingCommand ? 1 : 0,
            transition: 'opacity 0.5s ease'
          }}>
            DIGITAL ARSENAL
          </h1>

          <div style={{ 
            background: 'rgba(0, 0, 0, 0.9)',
            border: '2px solid #00ff88',
            padding: '20px',
            marginBottom: '3rem',
            fontFamily: 'JetBrains Mono, monospace',
            minHeight: '120px'
          }}>
            <div style={{ color: '#00ff88', marginBottom: '10px' }}>
              {'>'} {typedCommand}
              {isTypingCommand && !isTypingContent && (
                <span style={{
                  animation: 'blink 1s infinite',
                  color: '#00ff88'
                }}>█</span>
              )}
            </div>
            {isTypingContent && (
              <div style={{ color: '#ffffff', fontSize: '14px', whiteSpace: 'pre-line' }}>
                {typedContent}
                <span style={{
                  animation: 'blink 1s infinite',
                  color: '#00ff88'
                }}>█</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 分类过滤器 */}
      {showContent && (
        <div style={{ paddingBottom: '60px' }}>
          <div className="container">
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`terminal-btn hologram-appear appear-delay-${index + 1}`}
                style={{
                  background: selectedCategory === category ? '#00ff88' : 'transparent',
                  color: selectedCategory === category ? '#000' : '#00ff88',
                  border: '2px solid #00ff88',
                  fontSize: '12px'
                }}
              >
                ./{category.toLowerCase()}
              </button>
            ))}
          </div>
        </div>

          {/* 应用展示 */}
          <div className="section">
            <div className="container">
            <div className="apps-grid" style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem'
            }}>
              {filteredApps.map((app, index) => (
                <div key={app.id} className={`cyber-card hologram-appear data-stream appear-delay-${Math.min(index + 2, 6)}`}>
                  {/* 应用头部 */}
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}>
                    <div style={{ 
                      fontSize: '3rem',
                      marginRight: '1rem',
                      filter: 'drop-shadow(0 0 10px #00ff88)'
                    }}>
                      {app.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        color: '#00ff88',
                        marginBottom: '0.5rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '1.5rem'
                      }}>
                        {app.name}
                      </h3>
                      <div style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        fontSize: '12px'
                      }}>
                        <span style={{ 
                          color: getStatusColor(app.status),
                          fontFamily: 'JetBrains Mono, monospace'
                        }}>
                          [{app.status}]
                        </span>
                        <span style={{ color: '#666' }}>
                          ⭐ {app.rating} | 📥 {app.downloads}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 应用描述 */}
                  <p style={{ 
                    marginBottom: '1.5rem',
                    lineHeight: '1.6',
                    color: '#ccc'
                  }}>
                    {app.description}
                  </p>

                  {/* 技术栈 */}
                  <div style={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem'
                  }}>
                    {app.tech.map(tech => (
                      <span key={tech} style={{
                        background: 'rgba(255, 0, 136, 0.1)',
                        border: '1px solid #ff0088',
                        padding: '4px 8px',
                        fontSize: '11px',
                        fontFamily: 'JetBrains Mono, monospace',
                        color: '#ff0088'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 下载链接 */}
                  <div style={{ 
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '1px solid #333',
                    padding: '15px',
                    borderRadius: '4px'
                  }}>
                    <div style={{ 
                      color: '#00ff88',
                      fontSize: '12px',
                      marginBottom: '10px',
                      fontFamily: 'JetBrains Mono, monospace'
                    }}>
                      {'>'} ./download --platforms
                    </div>
                    <div style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {Object.entries(app.platforms).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="terminal-btn"
                          style={{
                            fontSize: '11px',
                            padding: '8px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            textDecoration: 'none'
                          }}
                        >
                          <span>{getPlatformIcon(platform)}</span>
                          {platform.toUpperCase()}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection