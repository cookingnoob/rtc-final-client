import React, { useEffect, useState } from 'react'

const SingleList = () => {
  const [list, setList] = useState(null)
  const [todos, setTodos] = useState(null)
  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch('http://localhost:3001/lists/663f0fc8e1262976e1951c72')
        const result = await response.json()
        setList(result.list)
        setTodos(result.todos)
      } catch (error) {
        console.error(error)
      }
    }
    getList()
  }, [])
  return (
    //volvera poner que la ruta esta protegida en el backend
    //falta ordenar los todo por orden
    <div>
      {
        list ?
          <div>
            <h1>{list.listName}</h1>
            {todos.map((todo, index) => (
              <p key={index}>{todo.description}</p>
            ))}
          </div>
          :
          <>Cargando...</>
      }

    </div>
  )
}

export default SingleList