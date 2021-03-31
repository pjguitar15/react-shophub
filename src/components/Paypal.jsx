import React, { useRef, useEffect } from 'react'

const Paypal = ({ setCheckoutVisible, setCartItems }) => {
  const paypal = useRef()

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'Cool looking table',
                amount: {
                  currency_code: 'USD',
                  value: 1,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          await actions.order.capture()
          setCheckoutVisible(false)
          alert('Paid successfully')
          setCartItems([])
        },
        onError: (err) => {
          alert('Payment Failed')
        },
      })
      .render(paypal.current)
  }, [])
  return (
    <div className='col-5 mx-auto'>
      <div ref={paypal}></div>
    </div>
  )
}

export default Paypal
