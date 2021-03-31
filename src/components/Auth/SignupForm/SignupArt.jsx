import React from 'react'
import signupArt from '../../../Assets/signupArt.svg'
const SignupArt = () => {
  return (
    <div className='m-0'>
      <div className='mx-auto col-lg-7' style={{ marginTop: '10rem' }}>
        <img src={signupArt} style={{ width: '100%' }} alt='signupart' />
      </div>
      <h1 className='text-center text-light mt-5 font-weight-bolder p-0'>
        Create your own Account!
      </h1>
      <h4 className='text-center text-light font-weight-light p-0'>
        We will never share your credentials to anyone
      </h4>
    </div>
  )
}

export default SignupArt
