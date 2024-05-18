import React, { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [listTodos, setListTodos] = useState(null)
  const [userLists, setUserLists] = useState(null)
  const [probando, setProbando] = useState('si funciona')

  const contextValue = {
    listTodos, setListTodos, userLists, setUserLists, probando, setProbando
  }
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Context