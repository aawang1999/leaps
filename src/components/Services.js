import React from 'react'
import ServiceItems from './ServiceItems'

const Services = () => {
  return (
    <section id="services" className='section bg-secondary min-h-[1000px]'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black'>
            Services
          </h2>
          <p className='subtitle'>
            Here's what we offer. For your first meeting, we recommend a free General Consultation session!
          </p>
        </div>
        <ServiceItems />
      </div>
    </section>
  )
}

export default Services