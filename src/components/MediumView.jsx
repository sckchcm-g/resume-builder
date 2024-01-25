import React from 'react'
import Navbar from './Navbar.jsx'
import LivePreview from './LivePreview.jsx'
import MobileFooter from './MobileFooter.jsx'
import Forms from '../Forms.jsx'
function MediumView() {
  return (
    <div className='medium-view '>
      <Navbar />
      <LivePreview />
      <MobileFooter />
      <Forms />
    </div>
  )
}

export default MediumView
