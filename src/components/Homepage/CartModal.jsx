import React from 'react'
import { Modal } from 'antd'
import { Card } from 'react-bootstrap'
const CartModal = ({ cartItems, setVisible, visible, proceedToCheckout }) => {
  return (
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
  )
}

export default CartModal
