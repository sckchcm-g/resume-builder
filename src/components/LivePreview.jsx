import React from 'react'
import Header from './Header.jsx'
import PreviewBody from './PreviewBody.jsx'
function LivePreview() {
  return (
    <div className='live-preview hidden md:block shadow-lg mx-20 px-3 lg:ml-10 lg:mx-0 shadow-[#9333ea] '>
      <Header />
      <PreviewBody />
    </div>
  )
}

export default LivePreview
