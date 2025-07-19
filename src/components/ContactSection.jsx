import { useState, useEffect } from 'react'

function ContactSection() {
    const [terminalLines, setTerminalLines] = useState([])
    const [showContent, setShowContent] = useState(false)
    const [typedCommand, setTypedCommand] = useState('')
    const [typedContent, setTypedContent] = useState('')
    const [isTypingCommand, setIsTypingCommand] = useState(false)
    const [isTypingContent, setIsTypingContent] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        method: 'email'
    })

    const command = 'ping contact --establish-connection'
    const content = `PING contact.neural.net: 56 data bytes
64 bytes from contact: icmp_seq=0 time=0.001ms
64 bytes from contact: icmp_seq=1 time=0.001ms
Connection established [OK]
Available protocols: EMAIL
Status: READY_TO_RECEIVE`

    const contactMethods = [
        {
            id: 'email',
            name: 'EMAIL',
            value: 'yifanook@gmail.com',
            icon: `┌─────────┐
│ @ MAIL  │
│ ░░░░░░░ │
│ ░░░░░░░ │
└─────────┘`,
            description: '',
            status: 'ACTIVE'
        }
    ]

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
                            setTimeout(typeCommand, 25) // 加快速度
                        } else {
                            setTimeout(() => {
                                setIsTypingContent(true)
                                let j = 0
                                const typeContent = () => {
                                    if (j < content.length) {
                                        setTypedContent(content.slice(0, j + 1))
                                        j++
                                        setTimeout(typeContent, 15) // 更快的内容打字速度
                                    } else {
                                        setTimeout(() => setShowContent(true), 500)
                                    }
                                }
                                typeContent()
                            }, 600)
                        }
                    }
                    typeCommand()
                }
            },
            { threshold: 0.3 }
        )

        const element = document.getElementById('contact')
        if (element) observer.observe(element)

        return () => observer.disconnect()
    }, [isTypingCommand, command, content])

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const timestamp = new Date().toLocaleTimeString()
        setTerminalLines(prev => [...prev,
        `user@yifanook:~$ ./transmit --protocol=${formData.method} --encrypt=quantum`,
        `[${timestamp}] Encrypting message payload...`,
        `[${timestamp}] Message transmitted via ${formData.method.toUpperCase()} protocol`,
        `[${timestamp}] Transmission complete [OK]`,
        `[${timestamp}] Expected response time: <24h`
        ])
        setFormData({ name: '', email: '', message: '', method: 'email' })
    }

    const handleMethodSelect = (method) => {
        setFormData({ ...formData, method })
        const selectedMethod = contactMethods.find(m => m.id === method)
        setTerminalLines(prev => [...prev, `> 选择通信方式: ${selectedMethod.name}`])
    }

    return (
        <section id="contact" style={{ minHeight: '100vh' }}>
            {/* 联系信息 */}
            <div className="section" style={{ paddingTop: '120px' }}>
                <div className="container">
                    <h1 className="neon" style={{
                        textAlign: 'center',
                        fontSize: '3rem',
                        marginBottom: '3rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        opacity: isTypingCommand ? 1 : 0,
                        transition: 'opacity 0.5s ease'
                    }}>
                        PING CONTACT
                    </h1>

                    <div style={{
                        background: 'rgba(0, 0, 0, 0.9)',
                        border: '2px solid #00ff88',
                        padding: '30px',
                        marginBottom: '3rem',
                        fontFamily: 'JetBrains Mono, monospace',
                        minHeight: '180px'
                    }}>
                        <div style={{ color: '#00ff88', marginBottom: '15px' }}>
                            user@yifanook:~$ {typedCommand}
                            {isTypingCommand && !isTypingContent && (
                                <span style={{
                                    animation: 'blink 1s infinite',
                                    color: '#00ff88'
                                }}>█</span>
                            )}
                        </div>
                        {isTypingContent && (
                            <div style={{ color: '#ffffff', fontSize: '12px', lineHeight: '1.4', whiteSpace: 'pre-line' }}>
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

            {/* 通信方式选择 */}
            {showContent && (
                <div className="section">
                    <div className="container">
                    <h2 className="neon data-stream contact-title" style={{
                        textAlign: 'center',
                        marginBottom: '3rem',
                        fontSize: '2rem',
                        fontFamily: 'JetBrains Mono, monospace'
                    }}>
                        <span className="desktop-title">{'<'} COMMUNICATION_PROTOCOLS {'/>'}</span>
                        <span className="mobile-title">{'<'} COMM_PROTOCOLS {'/>'}</span>
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
                                className={`cyber-card hologram-appear scan-reveal appear-delay-${index + 2}`}
                                onClick={() => handleMethodSelect(method.id)}
                                style={{
                                    cursor: 'pointer',
                                    background: formData.method === method.id ? 'rgba(0, 255, 136, 0.1)' : 'rgba(0, 0, 0, 0.8)',
                                    border: formData.method === method.id ? '2px solid #00ff88' : '1px solid #333'
                                }}
                            >
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: '1rem'
                                }}>
                                    <pre style={{
                                        fontSize: '10px',
                                        marginRight: '1rem',
                                        color: '#00ff88',
                                        fontFamily: 'JetBrains Mono, monospace',
                                        lineHeight: '1',
                                        margin: 0
                                    }}>
                                        {method.icon}
                                    </pre>
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
            </div>
            )}

            {/* 终端输出 */}
            {terminalLines.length > 0 && showContent && (
                <div className="section">
                    <div className="container">
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.9)',
                            border: '2px solid #00ff88',
                            padding: '20px',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '12px',
                            maxHeight: '300px',
                            overflowY: 'auto'
                        }}>
                            {terminalLines.map((line, index) => (
                                <div key={index} style={{ 
                                    color: line.includes('[OK]') ? '#00ff88' : 
                                           line.includes('[') ? '#ffaa00' : '#ffffff',
                                    marginBottom: '5px'
                                }}>
                                    {line}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slideUp {
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

export default ContactSection