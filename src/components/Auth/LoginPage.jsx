import React, { useRef, useState } from 'react'
import LoginForm from './LoginForm/LoginForm.jsx'
import { useAuth } from '../../AuthContext'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import LoginArt from './LoginForm/LoginArt.jsx'
const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch (error) {
      setError('Failed to sign in')
    }
    setLoading(false)
  }

  return (
    <Row className='m-0' style={{ height: '100vh', width: '100vw' }}>
      <Col xl='6' lg='6' md='6' xs='12' style={{ background: '#FFB1A4' }}>
        <LoginArt />
      </Col>
      <Col xl='6' lg='6' md='6' xs='12'>
        <LoginForm
          emailRef={emailRef}
          passwordRef={passwordRef}
          loading={loading}
          error={error}
          handleSubmit={handleSubmit}
        />
      </Col>
    </Row>
  )
}

export default LoginPage
