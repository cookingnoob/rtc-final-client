import React, { createContext, useState } from 'react'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [userLists, setUserLists] = useState(null)
  const [listTodos, setListTodos] = useState(null)
  const [error, setError] = useState(null)
  const [probando, setProbando] = useState('si funciona')

  const contextValue = {
    listTodos, setListTodos, userLists, setUserLists, probando, setProbando, error, setError
  }
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}

export default Context