import React, { useContext } from 'react'
import { Context } from './Context'
import ServiceItems from './ServiceItems'
import { categoryTitleInfo, categoryTitleInfoZh } from '../data'

const Services = () => {
  const { language, serviceCategory } = useContext(Context)
  return (
    <section id="services" className='section bg-secondary min-h-[1000px]'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className={`section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black ${language === 'en' ? 'tracking-normal' : 'tracking-widest'}`}>
            {language === 'en' ? 'Services' : '服务项目'}
          </h2>
          <p className={`subtitle text-gray-700 ${language === 'en' ? 'text-base tracking-normal' : 'text-lg tracking-widest'}`}>
            {language === 'en' ? categoryTitleInfo[serviceCategory] : categoryTitleInfoZh[serviceCategory]}
          </p>
        </div>
        <ServiceItems />
      </div>
    </section>
  )
}

export default Services