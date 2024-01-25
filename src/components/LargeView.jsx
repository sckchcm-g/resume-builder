import React from 'react'
import Forms from '../Forms.jsx'
import LivePreview from './LivePreview.jsx'

import Navbar from './Navbar.jsx'
import MobileFooter from './MobileFooter.jsx'
function LargeView() {
  return (
    <div className='large-view flex w-[100%] pt-10 lg:px-10 lg:pb-10'> 
      <Navbar />
      <div className='left w-[45%]'>
       <MobileFooter />
       <Forms />
      </div>
      <div className="right  w-[55%] flex flex-col justify-center">
        <LivePreview />
        
      </div>
    </div>
  )
}

export default LargeView
