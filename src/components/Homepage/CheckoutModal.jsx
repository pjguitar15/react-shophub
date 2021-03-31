import React from 'react'
import { Modal } from 'antd'
const CheckoutModal = ({
  checkoutVisible,
  goBackToCart,
  setCheckoutVisible,
  cartItems,
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
      <div className='font-weight-bold text-dark'>
        Checking out {cartItems.length} items
      </div>
      Paypal Checkout
    </Modal>
  )
}

export default CheckoutModal
