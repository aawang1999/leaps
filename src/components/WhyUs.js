import React, { useContext } from 'react'
import { Context } from './Context'
import { WhyUsParagraph } from './WhyUsData/Paragraph'
import { ZhWhyUsParagraph } from './WhyUsData/ZhParagraph'

const WhyUs = () => {
  const { language } = useContext(Context)


  return (
    <section id="whyus" className='section bg-secondary'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className={`section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px] ${language === 'en' ? 'tracking-normal' : 'tracking-widest'}`}>
            {language === 'en' ? 'Why Us?' : '选择跃升的优势'}
          </h2>
          <div className='flex flex-col lg:flex-row'>
            <h5 className='font-body font-bold text-left text-2xl mt-6 italic font-normal text-black lg:w-5/12 lg:pr-10'>
              {language === 'en' ? 'We offer an approachable, flexible, and effective counseling service by students, for students.' 
              : '在校大学生提供最平易近人、灵活高效的咨询服务。'}
            </h5>
            {language === 'en' ? <WhyUsParagraph/> : <ZhWhyUsParagraph/>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs