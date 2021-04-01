import React from 'react'
import coverimg from '../../Assets/covershoes.png'
import { Container } from 'react-bootstrap'
const CoverPage = () => {
  return (
    <div style={{ background: '#FFB1A4' }}>
      <Container>
        <div
          className='d-flex justify-content-between align-items-center'
          style={{ paddingTop: '8rem', paddingBottom: '8rem' }}
        >
          <div className='col-5'>
            <h5 className='text-light'> Shop now with</h5>
            <h1 className='text-light font-weight-bold'>ShopHub!</h1>
            <p className='lead text-light '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              soluta ipsum eum, molestias nisi perferendis consequuntur.
            </p>
          </div>
          <div>
            <img alt='test' src={coverimg} style={{ height: '20rem' }} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CoverPage
