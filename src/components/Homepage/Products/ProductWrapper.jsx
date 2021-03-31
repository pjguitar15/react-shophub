import React from 'react'
import ProductCard from './ProductCard.jsx'
import { Container } from 'react-bootstrap'
const ProductWrapper = ({ addItemsToCart }) => {
  return (
    <Container className='py-5'>
      <ProductCard addItemsToCart={addItemsToCart} />
    </Container>
  )
}

export default ProductWrapper
