import React, { useState, createContext } from "react"

export const Context = createContext({})

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const [serviceCategory, setServiceCategory] = useState('all')

  return (
    <Context.Provider value={{
      language,
      setLanguage,
      serviceCategory,
      setServiceCategory
    }}>
      {children}
    </Context.Provider>
  )
}

export default Context