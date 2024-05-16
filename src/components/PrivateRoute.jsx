import React, { useEffect } from 'react'

const PrivateRoute = () => {
  useEffect(() => {
    const isTokenValid = async () => {
      const token = sessionStorage.getItem('token')
      try {
        const response = await fetch('http://localhost:3001/user/valid', {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
        })
        const result = await response.json()
        console.log(result)

      } catch (error) {
        console.error(error)
      }
    }
    isTokenValid()
  }, [])

  return (
    <div>PrivateRoute</div>
  )
}

export default PrivateRoute