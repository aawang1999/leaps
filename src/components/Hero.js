import React from 'react'

const Hero = () => {
  return (
    <section id="home" className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black'>
            Welcome to Leaps
          </h2>
          <p className='subtitle'>
            College counseling by students, for students.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero