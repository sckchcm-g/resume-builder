import React from 'react'
import Header from './Header.jsx'
import PersonaIInfo from '../components/Form/PersonaIInfo.jsx'
import Navbar from './Navbar.jsx'
import MainTemplate from './templates/MainTemplate.jsx'
import FormSection from '../components/Form/MultiStepForm.jsx' 

// Templates Import
import TemplateS1 from './templates/TemplateS1.jsx'
import TemplateS2 from './templates/TemplateS2.jsx'
import TemplateS3 from './templates/TemplateS3.jsx'
import TemplateD1 from './templates/TemplateD1.jsx'
import TemplateD2 from './templates/TemplateD2.jsx'
import TemplateD3 from './templates/TemplateD3.jsx'


function AppLayout() {
  return (
    <div className='layout flex flex-col items-center  lg:flex-col-reverse gap-20   pb-[80px] md:pb-[100px]'>
      <Header />
      {/* <PersonaIInfo /> */}
      <FormSection/>
       <MainTemplate />
      <Navbar />
    </div>
  )
}

export default AppLayout
