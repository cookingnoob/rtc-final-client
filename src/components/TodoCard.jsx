import React from 'react'

const TodoCard = ({ todo }) => {
  return (
    <div>
      <input type='checkbox' />
      <p>{todo.description}</p>
      <p>{todo.notes}</p>
      <p>{todo.howMuchTimeItTakes}</p>
      <p>{todo.doneByXDate}</p>
    </div>
  )
}

export default TodoCard