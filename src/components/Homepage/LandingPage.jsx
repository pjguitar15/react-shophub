import React, { useState } from 'react'
import { useAuth } from '../../AuthContext'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'

// components
import CoverPage from './CoverPage.jsx'
import NavbarComp from './NavbarComp.jsx'
import ProductWrapper from './Products/ProductWrapper.jsx'
import CartModal from './CartModal.jsx'
import CheckoutModal from './CheckoutModal.jsx'
import FeaturedProducts from './Products/FeaturedProducts.jsx'

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
      duration: 1,
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

  const removeItemFromCart = (id) => {
    const filtered = cartItems.filter((item) => item.id != id)
    setCartItems([...filtered])
  }

  return (
    <div>
      {/* Cart Modal */}
      <CartModal
        removeItemFromCart={removeItemFromCart}
        cartItems={cartItems}
        visible={visible}
        setVisible={setVisible}
        proceedToCheckout={proceedToCheckout}
        setCartItems={setCartItems}
      />
      {/* Checkout Modal */}
      <CheckoutModal
        checkoutVisible={checkoutVisible}
        goBackToCart={goBackToCart}
        setCheckoutVisible={setCheckoutVisible}
        cartItems={cartItems}
      />
      <NavbarComp
        cartItems={cartItems}
        setVisible={setVisible}
        currentUser={currentUser}
        handleLogout={handleLogout}
      />
      <CoverPage />
      <ProductWrapper addItemsToCart={addItemsToCart} />
      <FeaturedProducts />
    </div>
  )
}

export default LandingPage
