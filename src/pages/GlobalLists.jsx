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
          <div key={index}>
            <img src={list.user.avatar} height='30px' />
            <p>{list.user.name}</p>
            <NavLink >{list.listName}</NavLink >
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default GlobalLists