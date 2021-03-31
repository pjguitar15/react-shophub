import React from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { mockData } from './ProductsData'
const ProductCard = ({ addItemsToCart }) => {
  return (
    <div>
      <Row>
        {mockData.map((item, index) => (
          <Col lg='3' md='6' sm='6' className='mt-4 p-2' key={index}>
            {/* Card Parent */}
            <Card className='border-0 mx-auto rounded-0 shadow-sm'>
              <Card.Img variant='top' src={item.image} />

              {/* Card Body */}
              <Card.Body className='py-3 text-left'>
                <Card.Text className='d-flex justify-content-between'>
                  <div
                    style={{ color: '#333333' }}
                    className='font-weight-bolder '
                  >
                    {item.name}
                  </div>
                  <div className=' font-weight-light'>P{item.price}</div>
                </Card.Text>

                {/* Add to Cart button */}
                <Button
                  style={{ background: '#FC8874' }}
                  variant='primary w-100 border-0'
                  size='sm'
                  onClick={() => addItemsToCart(item)}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default ProductCard
