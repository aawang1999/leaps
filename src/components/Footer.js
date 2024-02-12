import React, { useContext } from 'react'
import { Context } from './Context'
import { social } from '../data'

const Footer = () => {
  const { language } = useContext(Context)
  return (
    <footer className='bg-secondary py-8'>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>{icon}</a>
              )
            })}
          </div>
          <p className={`${language === 'en' ? 'tracking-normal' : 'tracking-widest'}`}>{language === 'en' ? '2024 © Leaps College Consulting LLC. All rights reserved.' : '2024 © 跃升大学顾问有限责任公司'}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer