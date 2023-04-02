import { Form, Row, Col, InputGroup } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { asyncLogin } from '../state/auth/middleware'

import ErrorMsg from '../components/ErrorMsg'
import HIMSI_LOGO from '../assets/HIMSI_LOGO.webp'
import { ReactComponent as EyeIcon } from '../assets/icons/Eye-on.svg'

import '../styles/pages/Login.css'

export default function Login() {
    const { error = { status: false } } = useSelector(states => states)
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const [showPass, setShowPass] = useState(false)

    // Handle Login and Call Action to Redux
    async function handleLogin(e) {
        e.preventDefault()
        // Middleware pass
        dispatch(asyncLogin(username, pass))

    }

    return (
        <main className="login-page">
            <section className="login-card">
                <img src={HIMSI_LOGO} width="120px" height="auto" alt="Logo HIMSI" />
                <h2 className="login-title">Login Admin</h2>

                {/* Error Display */}
                {error.status && (
                    <ErrorMsg title={error.message} />
                )}

                {/* Form Login Card **posible to be component** */}
                <Form className="login-form" onSubmit={(e) => handleLogin(e)}>
                    <Form.Group>
                        <Form.Control className="input-login" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} type="text" required />
                    </Form.Group>
                    <Form.Group>
                        <InputGroup>
                            <Form.Control className="input-login" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} type={showPass ? 'text' : 'password'} required />
                            <button onClick={() => setShowPass(!showPass)} type="button" className="hide-pass-button">
                                <EyeIcon />
                            </button>
                        </InputGroup>
                    </Form.Group>
                    <Row>
                        <Col className="cta-container">
                            <button type="submit" className="login-btn">Login</button>
                        </Col>
                    </Row>
                </Form>

            </section>
        </main>
    )
}