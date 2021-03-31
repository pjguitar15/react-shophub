import React from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const SignupForm = ({
  error,
  handleSubmit,
  emailRef,
  passwordRef,
  passwordConfirmRef,
  loading,
}) => {
  return (
    <div className='m-0'>
      <div className='border-0'>
        <Card.Body className='col-xl-7 mx-auto' style={{ marginTop: '10rem' }}>
          <h2 className='mb-1 text-dark font-weight-bolder'>Get Started</h2>
          <div className='mb-4'>
            <Link to='/login' style={{ color: '#c4c4c4' }}>
              Already have an account?
              <span className='text-danger font-weight-bold'> Login</span>
            </Link>
          </div>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label className='text-secondary'>Email</Form.Label>
              <Form.Control
                placeholder='Enter email'
                type='email'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label className='text-secondary'>Password</Form.Label>
              <Form.Control
                placeholder='Enter password'
                type='password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label className='text-secondary'>
                Password Confirmation
              </Form.Label>
              <Form.Control
                placeholder='Confirm password'
                type='password'
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check
                className='text-secondary'
                type='checkbox'
                label='I agree to Terms of Service'
              />
            </Form.Group>
            <Button
              className='w-100'
              variant='danger'
              disabled={loading}
              type='submit'
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </div>
    </div>
  )
}

export default SignupForm
