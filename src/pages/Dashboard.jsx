import React, { useContext, useEffect, useState } from 'react'
import ListsSideBar from '../components/ListsSideBar'
import TodoContainer from '../components/TodoContainer'
import { Context } from '../components/Context'

const Dashboard = () => {
  const { error } = useContext(Context)

  return (
    <>
      {error ?
        <>
          <p>Inicia sesion</p>
        </>
        :
        <>
          <ListsSideBar />
          <TodoContainer />

        </>
      }

    </>
  )
}

export default Dashboard