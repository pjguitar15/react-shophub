import React from 'react'
import { Navbar, Container, Button } from 'react-bootstrap'

const NavbarComp = ({ currentUser, handleLogout, setVisible, cartItems }) => {
  return (
    <Navbar className='fixed-top bg-light'>
      <Container>
        <Navbar.Brand href='#home' className='font-weight-bold'>
          shophub
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text>
            Signed in as:
            <span className='text-dark font-weight-bold'>
              {' ' + currentUser.email.slice(0, currentUser.email.indexOf('@'))}
            </span>
          </Navbar.Text>

          {/* Cart and Checkout button */}
          <div onClick={() => setVisible(true)} className='mx-3 cart-button'>
            <i
              className='fas fa-shopping-cart'
              style={{ color: '#FC8874' }}
            ></i>
            <span
              className='bg-danger px-1 font-weight-bold text-light rounded'
              style={{ fontSize: '10px' }}
            >
              {cartItems.length}
            </span>
          </div>

          {/* Logout */}
          <Button
            variant='outline-danger ml-3'
            size='sm'
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
