import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'

const ListsSideBar = () => {
  const { userLists, setUserLists, error, setError } = useContext(Context)


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
      if (result.error) {
        console.log('si funciona', result)
        setError(result)
      }
      setUserLists(result.data)
    }
    getUserInfo()
  }, [])

  return (
    <>
      <div>
        {userLists ?
          <>
            {userLists.map((list, index) => (
              <div key={index}>
                <div>
                  <p>{list.listName}</p>
                </div>
              </div>
            ))}
          </>
          :
          <p>Cargando...</p>
        }
      </div>

    </>

  )
}

export default ListsSideBar