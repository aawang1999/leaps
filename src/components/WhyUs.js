import React, { useContext } from 'react'
import { Context } from './Context'

const WhyUs = () => {
  const { language } = useContext(Context)


  return (
    <section className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className={`section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px] ${language === 'en' ? 'tracking-normal' : 'tracking-widest'}`}>
            {language === 'en' ? 'Why Us?' : '选择跃升的优势'}
          </h2>
          <div className='flex flex-col lg:flex-row'>
            <h5 className='font-body font-bold text-left text-2xl mt-6 italic font-normal text-black lg:w-5/12 lg:pr-10'>
              We offer an approachable, flexible, and effective counseling service by students, for students.
            </h5>
            <div className='lg:w-7/12'>
              <p className="text-left mt-6 text-gray-700">
                Having went through the college application process just a few years ago, we at Leaps want to provide students like us with a more <strong>practical and tailored alternative</strong> to the traditional college consulting service.
              </p>
              <p className="text-left mt-6 text-gray-700">
                At Leaps, our services are <strong>virtual, task-specific, and charged per session</strong>, giving you the most bang for your buck. Having assisted many of our peers with college applications over the years, we are committed to offering <strong>transparent, actionable advice</strong>. We will never bombard you with sugarcoated guarantees, fancy packages, or hidden fees.
              </p>
              <p className="text-left mt-6 text-gray-700">
                We can relate with both students and parents facing this pivotal crossroads in life because <strong>we’ve recently experienced it ourselves</strong>. We are confident that our insider knowledge of the current U.S. university scene can aid students in finding success in the admissions process. Our goal is to give every student <strong>the opportunity to study at the colleges that best suit them</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs