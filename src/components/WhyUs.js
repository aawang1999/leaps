import React, { useContext } from 'react'
import { Context } from './Context'
import { whyusP1, whyusP2, whyusP3, whyusP4, zhwhyusP1, zhwhyusP2, zhwhyusP3,zhwhyusP4 } from '../data'

const WhyUs = () => {
  const { language, setLanguage } = useContext(Context)

  
  return (
    <section id="whyus" className='section bg-primary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className={`section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px] ${language === 'en' ? 'tracking-normal' : 'tracking-widest'}`}>
            {language === 'en' ? 'Why Us?' : '选择跃升的优势'}
          </h2>
          <br/>
          <p className="text-left">
            {language === 'en' ? whyusP1 : zhwhyusP1}
          </p>
          <br/>
          <p className="text-left">
            {language === 'en' ? whyusP2 : zhwhyusP2}
          </p>
          <br/>
          <p className="text-left">
            {language === 'en' ? whyusP3 : zhwhyusP3}
          </p>
          <br/>
          <p className="text-left">
            {language === 'en' ? whyusP4 : zhwhyusP4}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyUs