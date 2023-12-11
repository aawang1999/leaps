import React, { useContext } from 'react'
import { Context } from './Context'
import { Link } from 'react-scroll'

export const Banner = () => {
  const { language } = useContext(Context)
  return (
    <section id="home" className='section bg-orange-200'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className={`section-title relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-1/2 before:hidden before:lg:block text-black mt-[50px] lg:mt-[0px] ${language === 'en' ? 'tracking-normal' : 'tracking-widest'}`}>
            {language === 'en' ? 'Holiday Discount' : '假期优惠'}
          </h2>
          <p className={`text-gray-700 mb-16 lg:mb-24 max-w-[520px] text-left ${language === 'en' ? 'tracking-normal lg:text-lg' : 'tracking-widest text-lg lg:text-xl'}`}>
            {language === 'en' ? <p>Enjoy <strong>20% off</strong> on all services for a limited time only!</p> : <p>限时内所有服务<strong>全面八折</strong>！</p>}
          </p>
          <Link
            to='services'
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className='transition-all duration-300'
          >
            <button className={`btn btn-md bg-accent hover:bg-accent-hover transition-all ${language === 'en' ? 'tracking-normal' : 'tracking-widest'}`}>
              {language === 'en' ? 'Our Services' : '服务项目'}
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Banner