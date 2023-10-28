import React, { useContext } from 'react'
import { Context } from './Context'
import Testimonials from './Testimonials'

const Hero = () => {
  const { language, setLanguage } = useContext(Context)
  return (
    <section id="home" className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px]'>
            {language == 'en' ? 'Welcome to Leaps' : '跃升顾问欢迎您'}
          </h2>
          <p className='subtitle text-gray-700'>
            College counseling by students, for students.
          </p>
        </div>
        <Testimonials />
      </div>
    </section>
  )
}

export default Hero