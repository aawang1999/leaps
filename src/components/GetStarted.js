import React, { useContext } from 'react'
import { Context } from './Context'
import { GetStartedP } from './GetStarted/GetStartedP'
import { ZhGetStartedP } from './GetStarted/ZhGetStartedP'

const GetStarted = () => {
  const { language } = useContext(Context)
  
  return (
    <section id="getstarted"  className='section bg-orange-200'>
      <div className="container mx-auto">
        { language === 'en' ? <GetStartedP/> : <ZhGetStartedP/> }
      </div>
    </section>
  )
}

export default GetStarted