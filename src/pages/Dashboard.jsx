import { Token } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const [userLists, setUserLists] = useState(null)
  useEffect(() => {
    const getUserInfo = async () => {
      const token = sessionStorage.getItem('token')
      const response = await fetch("http://localhost:3001/lists/user", {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
      });
      const result = await response.json()
      setUserLists(result.data)
      console.log(userLists)
    }
    getUserInfo()
  }, [])
  return (
    <>
      {userLists ?
        <>
          {userLists.map((list, index) => (
            <div key={index}>
              <p>{list.listName}</p>
            </div>
          ))}
        </>
        :
        <p>Cargando...</p>
      }
    </>
  )
}

export default Dashboard