import React from 'react'
import AdvisorProfileSlider from './AdvisorProfileSlider'

const AdvisorProfiles = () => {
  return (
    <section id="advisor-profiles" className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <h2 className='section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px]'>
            Advisor Profiles
          </h2>
        </div>
        <AdvisorProfileSlider />
      </div>
    </section>
  )
}

export default AdvisorProfiles