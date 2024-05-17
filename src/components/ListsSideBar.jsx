import React, { useEffect, useState } from 'react'

const ListsSideBar = () => {
  const [userLists, setUserLists] = useState(null)
  const [listTodos, setListTodos] = useState(null)

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
      //getTodos
      const todosResponse = await fetch(`http://localhost:3001/lists/${result.data[0]._id}`, {
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
      const todosResult = await todosResponse.json()
      setListTodos(todosResult.todos)

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
      {listTodos ?
        <>
          {listTodos.map((todo, index) => (
            <div key={index}>
              <div>
                <p>{todo.description}</p>
              </div>
            </div>
          ))}
        </>
        :
        <p>Cargando...</p>
      }
    </>

  )
}

export default ListsSideBar