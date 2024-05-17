import React, { useEffect, useState } from 'react'
import useUserLists from '../hooks/useUserLists'

const ListsSideBar = () => {

  const [listTodos, setListTodos] = useState(null)
  const { userLists, getUserInfo } = useUserLists()
  useEffect(() => {
    const fetchData = async () => {

      await getUserInfo()
    }
    //getTodos
    // const todosResponse = await fetch(`http://localhost:3001/lists/${result.data[0]._id}`, {
    //   method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   mode: "cors", // no-cors, *cors, same-origin
    //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: "same-origin", // include, *same-origin, omit
    //   headers: {
    //     "Content-Type": "application/json",
    //     "Authorization": `Bearer ${token}`
    //   },
    //   redirect: "follow",
    //   referrerPolicy: "no-referrer",
    // });
    // const todosResult = await todosResponse.json()
    // setListTodos(todosResult.todos)


    fetchData()
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