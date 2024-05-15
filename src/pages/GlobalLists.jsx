import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const GlobalLists = () => {
  const [sharedLists, setSharedLists] = useState(null)
  useEffect(() => {
    const getGlobalLists = async () => {
      try {
        const response = await fetch('http://localhost:3001/lists/share')
        const result = await response.json()
        setSharedLists(result.data)
        console.log(result.data)
      } catch (error) {
        console.error(error)
      }
    }
    getGlobalLists()
  }, [])
  return (
    <div>
      {sharedLists ? (
        sharedLists.map((list, index) => (
          <NavLink key={index}>{list.listName}</NavLink >
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GlobalLists