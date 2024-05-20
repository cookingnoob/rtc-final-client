import React, { useContext, useEffect } from 'react'
import Context from './Context'

const TodoContainer = () => {
  const { userLists, setListTodos, listTodos } = useContext(Context)
  useEffect(() => {
    const getListsTodos = async () => {
      if (!userLists) {
        return
      } else {
        const token = sessionStorage.getItem('token')
        const todosResponse = await fetch(`http://localhost:3001/lists/${userLists[0]._id}`, {
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
        console.log(todosResult)
        setListTodos(todosResult.todos)
      }
    }
    getListsTodos()
  }, [userLists])
  return (
    <>
      {listTodos ?
        <>
          {listTodos.map((todo, index) => (
            <div key={index}>
              <div>
                <input type="text" name="to-do" />
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

export default TodoContainer