import { useState, useEffect } from 'react'

function Contact() {
    const [terminalLines, setTerminalLines] = useState([])
    const [currentInput, setCurrentInput] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        method: 'email'
    })

    const contactMethods = [
        {
            id: 'email',
            name: 'QUANTUM_MAIL',
            value: 'architect@neural.net',
            icon: '📧',
            description: '量子加密邮件通道',
            status: 'ACTIVE'
        },
        {
            id: 'telegram',
            name: 'SECURE_CHANNEL',
            value: '@digital_architect',
            icon: '💬',
            description: '端到端加密通讯',
            status: 'ACTIVE'
        },
        {
            id: 'github',
            name: 'CODE_REPOSITORY',
            value: 'github.com/digital-architect',
            icon: '🔗',
            description: '开源项目协作',
            status: 'ACTIVE'
        },
        {
            id: 'linkedin',
            name: 'PROFESSIONAL_NET',
            value: 'linkedin.com/in/digital-architect',
            icon: '💼',
            description: '商务合作网络',
            status: 'ACTIVE'
        },
        {
            id: 'discord',
            name: 'VOICE_PROTOCOL',
            value: 'DigitalArchitect#0001',
            icon: '🎮',
            description: '实时语音通信',
            status: 'ACTIVE'
        }
    ]

    const bootSequence = [
        '> 初始化通信协议...',
        '> 建立量子加密隧道...',
        '> 扫描可用通信频道...',
        '> 验证身份认证系统...',
        '> 通信系统就绪 [OK]',
        '> 等待传入连接...'
    ]

    useEffect(() => {
        let currentLine = 0
        const typeNextLine = () => {
            if (currentLine < bootSequence.length) {
                setIsTyping(true)
                setTimeout(() => {
                    setTerminalLines(prev => [...prev, bootSequence[currentLine]])
                    setIsTyping(false)
                    currentLine++
                    setTimeout(typeNextLine, 800)
                }, 500)
            } else {
                setTimeout(() => setShowForm(true), 1000)
            }
        }

        typeNextLine()
    }, [])

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newLine = `> 消息已通过 ${formData.method.toUpperCase()} 协议发送`
        setTerminalLines(prev => [...prev, newLine, '> 传输完成 [OK]', '> 预计响应时间: 24小时内'])
        setFormData({ name: '', email: '', message: '', method: 'email' })
    }

    const handleMethodSelect = (method) => {
        setFormData({ ...formData, method })
        const selectedMethod = contactMethods.find(m => m.id === method)
        setTerminalLines(prev => [...prev, `> 选择通信方式: ${selectedMethod.name}`])
    }

    return (
        <div>
            {/* 终端启动界面 */}
            <section className="section" style={{ paddingTop: '120px' }}>
                <div className="container">
                    <div style={{
                        background: 'rgba(0, 0, 0, 0.95)',
                        border: '2px solid #00ff88',
                        padding: '30px',
                        marginBottom: '3rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        minHeight: '200px'
                    }}>
                        <div style={{ color: '#00ff88', marginBottom: '20px' }}>
                            NEURAL.NET COMMUNICATION TERMINAL v2.1.0
                        </div>
                        {terminalLines.map((line, index) => (
                            <div key={index} style={{
                                color: line.includes('[OK]') ? '#00ff88' : '#ffffff',
                                marginBottom: '8px',
                                fontSize: '14px'
                            }}>
                                {line}
                            </div>
                        ))}
                        {isTyping && (
                            <div style={{
                                color: '#00ff88',
                                animation: 'blink 1s infinite'
                            }}>
                                █
                            </div>
                        )}
                    </div>

                    <h1 className="glitch neon" data-text="ESTABLISH CONNECTION" style={{
                        textAlign: 'center',
                        fontSize: '3rem',
                        marginBottom: '3rem',
                        fontFamily: 'JetBrains Mono, monospace'
                    }}>
                        ESTABLISH CONNECTION
                    </h1>
                </div>
            </section>

            {showForm && (
                <>
                    {/* 通信方式选择 */}
                    <section className="section">
                        <div className="container">
                            <h2 className="neon" style={{
                                textAlign: 'center',
                                marginBottom: '3rem',
                                fontSize: '2rem',
                                fontFamily: 'JetBrains Mono, monospace'
                            }}>
                                {'<'} COMMUNICATION_PROTOCOLS {'/>'}
                            </h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '2rem',
                                marginBottom: '4rem'
                            }}>
                                {contactMethods.map((method, index) => (
                                    <div
                                        key={method.id}
                                        className="cyber-card"
                                        onClick={() => handleMethodSelect(method.id)}
                                        style={{
                                            cursor: 'none',
                                            background: formData.method === method.id ? 'rgba(0, 255, 136, 0.1)' : 'rgba(0, 0, 0, 0.8)',
                                            border: formData.method === method.id ? '2px solid #00ff88' : '1px solid #333',
                                            animation: `slideUp 0.5s ease ${index * 0.1}s forwards`,
                                            opacity: 0,
                                            transform: 'translateY(20px)'
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginBottom: '1rem'
                                        }}>
                                            <span style={{
                                                fontSize: '2rem',
                                                marginRight: '1rem'
                                            }}>
                                                {method.icon}
                                            </span>
                                            <div>
                                                <h3 style={{
                                                    color: '#00ff88',
                                                    fontFamily: 'JetBrains Mono, monospace',
                                                    fontSize: '16px',
                                                    marginBottom: '5px'
                                                }}>
                                                    {method.name}
                                                </h3>
                                                <div style={{
                                                    color: method.status === 'ACTIVE' ? '#00ff88' : '#ff0088',
                                                    fontSize: '12px',
                                                    fontFamily: 'JetBrains Mono, monospace'
                                                }}>
                                                    [{method.status}]
                                                </div>
                                            </div>
                                        </div>

                                        <p style={{
                                            color: '#ccc',
                                            fontSize: '14px',
                                            marginBottom: '1rem'
                                        }}>
                                            {method.description}
                                        </p>

                                        <div style={{
                                            background: 'rgba(0, 0, 0, 0.5)',
                                            padding: '10px',
                                            border: '1px solid #333',
                                            fontFamily: 'JetBrains Mono, monospace',
                                            fontSize: '12px',
                                            color: '#00ff88'
                                        }}>
                                            {method.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* 量子消息传输界面 */}
                    <section className="section">
                        <div className="container">
                            <div style={{
                                maxWidth: '800px',
                                margin: '0 auto'
                            }}>
                                <h2 className="neon" style={{
                                    textAlign: 'center',
                                    marginBottom: '3rem',
                                    fontSize: '2rem',
                                    fontFamily: 'JetBrains Mono, monospace'
                                }}>
                                    {'<'} QUANTUM_MESSAGE_TRANSMITTER {'/>'}
                                </h2>

                                <div className="cyber-card">
                                    <div style={{
                                        color: '#00ff88',
                                        fontSize: '14px',
                                        marginBottom: '20px',
                                        fontFamily: 'JetBrains Mono, monospace'
                                    }}>
                                        {'>'} ./compose_message --protocol={formData.method} --encrypt=quantum
                                    </div>

                                    <form onSubmit={handleSubmit}>
                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: '1rem',
                                            marginBottom: '1.5rem'
                                        }}>
                                            <div>
                                                <label style={{
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    color: '#00ff88',
                                                    fontSize: '12px',
                                                    fontFamily: 'JetBrains Mono, monospace'
                                                }}>
                                                    SENDER_ID:
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleFormChange}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px',
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        border: '1px solid #333',
                                                        color: '#ffffff',
                                                        fontSize: '14px',
                                                        fontFamily: 'JetBrains Mono, monospace'
                                                    }}
                                                    placeholder="输入你的代号..."
                                                />
                                            </div>

                                            <div>
                                                <label style={{
                                                    display: 'block',
                                                    marginBottom: '0.5rem',
                                                    color: '#00ff88',
                                                    fontSize: '12px',
                                                    fontFamily: 'JetBrains Mono, monospace'
                                                }}>
                                                    RETURN_ADDRESS:
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px',
                                                        background: 'rgba(0, 0, 0, 0.8)',
                                                        border: '1px solid #333',
                                                        color: '#ffffff',
                                                        fontSize: '14px',
                                                        fontFamily: 'JetBrains Mono, monospace'
                                                    }}
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '2rem' }}>
                                            <label style={{
                                                display: 'block',
                                                marginBottom: '0.5rem',
                                                color: '#00ff88',
                                                fontSize: '12px',
                                                fontFamily: 'JetBrains Mono, monospace'
                                            }}>
                                                MESSAGE_PAYLOAD:
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleFormChange}
                                                required
                                                rows="6"
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    background: 'rgba(0, 0, 0, 0.8)',
                                                    border: '1px solid #333',
                                                    color: '#ffffff',
                                                    fontSize: '14px',
                                                    fontFamily: 'JetBrains Mono, monospace',
                                                    resize: 'vertical'
                                                }}
                                                placeholder="输入你的消息内容..."
                                            />
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{
                                                color: '#666',
                                                fontSize: '12px',
                                                fontFamily: 'JetBrains Mono, monospace'
                                            }}>
                                                加密级别: QUANTUM | 协议: {formData.method.toUpperCase()}
                                            </div>

                                            <button
                                                type="submit"
                                                className="terminal-btn"
                                                style={{
                                                    fontSize: '14px',
                                                    padding: '12px 24px'
                                                }}
                                            >
                                                ./transmit --now
                                            </button>
                                        </div>
                                    </form>
                                </div>

                                {/* 状态指示器 */}
                                <div style={{
                                    marginTop: '2rem',
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '1rem'
                                }}>
                                    {[
                                        { label: 'ENCRYPTION', status: 'ACTIVE', color: '#00ff88' },
                                        { label: 'TRANSMISSION', status: 'READY', color: '#ffaa00' },
                                        { label: 'RESPONSE_TIME', status: '<24H', color: '#00ff88' }
                                    ].map((indicator, index) => (
                                        <div key={index} className="cyber-card" style={{
                                            textAlign: 'center',
                                            padding: '15px'
                                        }}>
                                            <div style={{
                                                color: '#666',
                                                fontSize: '10px',
                                                marginBottom: '5px',
                                                fontFamily: 'JetBrains Mono, monospace'
                                            }}>
                                                {indicator.label}
                                            </div>
                                            <div style={{
                                                color: indicator.color,
                                                fontSize: '12px',
                                                fontFamily: 'JetBrains Mono, monospace',
                                                fontWeight: 'bold'
                                            }}>
                                                [{indicator.status}]
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )}

            <style jsx>{`
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </div>
    )
}

export default Contact