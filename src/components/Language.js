import React, { useContext } from 'react'
import { Context } from './Context'

const Language = ({ color }) => {
  const { language, setLanguage } = useContext(Context)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh-CN' : 'en')
  }

  return (
    <div className={`${color === 'white' ? 'text-white' : 'text-black'} cursor-pointer`} onClick={toggleLanguage}>{language === 'en' ? '简体中文' : 'English'}</div>
  )
}

export default Language