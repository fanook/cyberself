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

    useEffect(() => {
        // 直接显示表单，不需要启动序列
        setShowForm(true)
    }, [])

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
        <div>
            {/* 页面标题和代码展示 */}
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
                            user@yifanook:~$ ping contact --establish-connection
                        </div>
                        <div style={{ color: '#ffffff', fontSize: '12px', lineHeight: '1.4' }}>
                            PING contact.neural.net: 56 data bytes<br />
                            64 bytes from contact: icmp_seq=0 time=0.001ms<br />
                            64 bytes from contact: icmp_seq=1 time=0.001ms<br />
                            Connection established [OK]<br />
                            Available protocols: EMAIL<br />
                            Status: READY_TO_RECEIVE
                        </div>
                    </div>

                    <h1 className="glitch neon" data-text="PING CONTACT" style={{
                        textAlign: 'center',
                        fontSize: '3rem',
                        marginBottom: '3rem',
                        fontFamily: 'JetBrains Mono, monospace'
                    }}>
                        PING CONTACT
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