import React, { useState, useEffect } from 'react'
import { useAuth } from '../../AuthContext'
import { useHistory } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { message, Modal } from 'antd'

// components
import CoverPage from './CoverPage.jsx'
import NavbarComp from './NavbarComp.jsx'
import ProductWrapper from './Products/ProductWrapper.jsx'
import CartModal from './CartModal.jsx'
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
    message.success({
      content: 'Item added to cart!',
      duration: 4,
      maxCount: 2,
      style: {
        marginTop: '20vh',
      },
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
      <CartModal
        cartItems={cartItems}
        visible={visible}
        setVisible={setVisible}
        proceedToCheckout={proceedToCheckout}
      />
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
