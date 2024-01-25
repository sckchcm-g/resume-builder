import React from 'react'
import Navbar from './Navbar'
import MobileFooter from './MobileFooter'

import Forms from './Forms'
function Mobileview() {
  return (
    <div className='w-[100%] '>
       <Navbar /> 
      <Forms />
      <MobileFooter /> 
    </div>
  )
}

export default Mobileview
