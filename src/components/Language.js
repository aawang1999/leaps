import React, { useContext } from 'react'
import { Context } from './Context'

const Language = () => {
  const { language, setLanguage } = useContext(Context)

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh-CN' : 'en')
  }

  return (
    <div className='cursor-pointer' onClick={toggleLanguage}>{language === 'en' ? '简体中文' : 'English'}</div>
  )
}

export default Language