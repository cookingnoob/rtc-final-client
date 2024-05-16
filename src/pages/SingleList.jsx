import React, { useEffect, useState } from 'react'
import TodoCard from '../components/TodoCard'
import { useParams } from 'react-router-dom'


const SingleList = () => {
  const [list, setList] = useState(null)
  const [todos, setTodos] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const getList = async () => {
      try {
        const response = await fetch(`http://localhost:3001/lists/${id}`)
        const result = await response.json()
        setList(result.list)
        setTodos(result.todos.sort((a, b) => a.order - b.order))
      } catch (error) {
        console.error(error)
      }
    }
    getList()
  }, [])
  return (
    //volvera poner que la ruta esta protegida en el backend

    <div>
      {
        list ?
          <div>
            <h1>{list.listName}</h1>
            {todos.map((todo, index) => (
              <TodoCard key={index} todo={todo} />
            ))}
          </div>
          :
          <>Cargando...</>
      }

    </div>
  )
}

export default SingleList