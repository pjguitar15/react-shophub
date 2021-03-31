import React, { useRef, useState } from 'react'
import SignupForm from './SignupForm/SignupForm.jsx'
import { useAuth } from '../../AuthContext'
import { useHistory } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import SignupArt from './SignupForm/SignupArt.jsx'
const Signup = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      alert('Account successfully created')
      history.push('/login')
    } catch (error) {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <Row className='m-0' style={{ height: '100vh', width: '100vw' }}>
      <Col xl='6' lg='6' md='6' xs='12' style={{ background: '#FFB1A4' }}>
        <SignupArt />
      </Col>
      <Col xl='6' lg='6' md='6' xs='12'>
        <SignupForm
          emailRef={emailRef}
          passwordRef={passwordRef}
          passwordConfirmRef={passwordConfirmRef}
          loading={loading}
          error={error}
          handleSubmit={handleSubmit}
        />
      </Col>
    </Row>
  )
}

export default Signup
