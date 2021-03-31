import React from 'react'
import { Modal } from 'antd'
import Paypal from '../Paypal.jsx'
const CheckoutModal = ({
  checkoutVisible,
  goBackToCart,
  setCheckoutVisible,
  cartItems,
  setCartItems,
}) => {
  return (
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
      <div className='font-weight-bold lead text-center mb-3 text-dark'>
        Checking out {cartItems.length} item
        <span className={cartItems.length === 1 && 'd-none'}>s</span>
      </div>
      <Paypal
        setCartItems={setCartItems}
        setCheckoutVisible={setCheckoutVisible}
      />
    </Modal>
  )
}

export default CheckoutModal
