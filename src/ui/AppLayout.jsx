import React from 'react'
import Header from './Header.jsx'
import PersonaIInfo from '../components/Form/PersonaIInfo.jsx'
import Navbar from './Navbar.jsx'
import Template1 from './templates/Template1.jsx'

function AppLayout() {
  return (
    <div className='layout flex flex-col items-center  lg:flex-col-reverse gap-20   pb-[80px] md:pb-[100px]'>
      <Header />
      <PersonaIInfo />
       <Template1 />
      <Navbar />
     
    </div>
  )
}

export default AppLayout
