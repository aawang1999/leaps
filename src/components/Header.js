import React, { useState, useEffect, useContext } from 'react'
import { Context } from './Context'
import Nav from '../components/Nav'
import NavMobile from '../components/NavMobile'
import Socials from '../components/Socials'
import Language from './Language'

const Header = () => {
  const [bg, setBg] = useState(false)
  const { language } = useContext(Context)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false)
    })
  })

  return (
    <header className={`${bg ? 'bg-secondary h-20' : 'h-24'} flex items-center fixed top-0 w-full text-black z-10 transition-all duration-300`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="#">
          <div className={`font-bold ${language === 'en' ? 'text-base tracking-normal' : 'text-lg tracking-widest'}`}>{language === 'en' ? 'Leaps' : '跃升顾问'}</div>
        </a>
        <div className="hidden lg:block">
          <Nav />
        </div>
        <div className="hidden lg:block">
          <Language />
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  )
}

export default Header