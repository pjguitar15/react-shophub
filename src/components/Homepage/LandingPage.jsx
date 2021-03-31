import React, { useState, useEffect } from 'react'
import { useAuth } from '../../AuthContext'
import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { message, Modal } from 'antd'

// components
import CoverPage from './CoverPage.jsx'
import NavbarComp from './NavbarComp.jsx'
import ProductWrapper from './Products/ProductWrapper.jsx'

// start of function
const LandingPage = () => {
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [visible, setVisible] = useState(false)
  const [checkoutVisible, setCheckoutVisible] = useState(false)
  const [cartItems, setCartItems] = useState([])

  // handle logout
  const handleLogout = async () => {
    try {
      await logout()
      history.push('/login')
    } catch {
      alert('failed to logout')
    }
  }
  // displays a 2 second success message (ant design)
  const addItemsToCart = (item) => {
    setCartItems([...cartItems, item])
    message.success({ content: 'Item added to cart!', duration: 4 })
    message.config({
      top: 200,
      maxCount: 3,
    })
  }

  // Proceed to Checkout
  const proceedToCheckout = () => {
    setVisible(false)
    setCheckoutVisible(true)
  }

  // Pal with Paypal
  const goBackToCart = () => {
    setVisible(true)
    setCheckoutVisible(false)
  }

  // TEST!!!
  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <div>
      {/* Cart Modal */}
      <Modal
        title='Cart items'
        centered
        visible={visible}
        onOk={proceedToCheckout}
        onCancel={() => setVisible(false)}
        width={1000}
        okText='Go to Checkout page'
        okButtonProps={{ disabled: cartItems.length < 1 ? true : false }}
      >
        {cartItems.length < 1 && (
          <h1 className='text-center text-dark'>Cart Empty :(</h1>
        )}
        {cartItems.map((item, index) => (
          <div key={index} className='row mb-5'>
            <Card.Img variant='top' src={item.image} className='col-4' />
            <div className='col-8'>
              <h4 className='text-dark'>{item.name}</h4>
              <h6 className='text-dark'>P{item.price}</h6>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Modal>

      {/* Checkout Modal */}
      <Modal
        title='Checkout'
        centered
        visible={checkoutVisible}
        onOk={goBackToCart}
        onCancel={() => setCheckoutVisible(false)}
        width={1000}
        okText='Back to Cart'
        okButtonProps={{ disabled: cartItems.length < 1 ? true : false }}
      >
        <div className='font-weight-bold text-dark'>
          Checking out {cartItems.length} items
        </div>
        Paypal Checkout
      </Modal>

      <NavbarComp
        cartItems={cartItems}
        setVisible={setVisible}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <CoverPage />
      <ProductWrapper addItemsToCart={addItemsToCart} />
    </div>
  )
}

export default LandingPage
