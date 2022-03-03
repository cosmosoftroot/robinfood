import React, { createContext, useState } from 'react'
export const AuthContext = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true)
    },
    removeAuth: () => {
      setIsAuth(false)
    }
  }
  return (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}

const Context =  {
  Provider,
  Consumer: AuthContext.Consumer
}

export default Context
