import React, { useContext } from 'react'
import { Context } from './Context'
import { navigation, zhCnNavigation } from '../data'
import { Link } from 'react-scroll'

const Nav = () => {
  const { language, setLanguage } = useContext(Context)
  let navigationDisplay = language === 'en' ? navigation : zhCnNavigation
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigationDisplay.map((item, index) => {
          return (
            <li
              className='text-black hover:text-accent cursor-pointer'
              key={index}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`transition-all duration-300 ${language === 'en' ? 'text-base' : 'text-lg tracking-widest'}`}
              >
                {item.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav