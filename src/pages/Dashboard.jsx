import React, { useContext, useEffect, useState } from 'react'
import ListsSideBar from '../components/ListsSideBar'
import TodoContainer from '../components/TodoContainer'
import { Context } from '../components/Context'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const { error } = useContext(Context)
  useEffect(() => {

    if (error) {
      navigate('/login')
    }
  }, [error])
  return (
    <>
      <ListsSideBar />
      <TodoContainer />
    </>
  )
}

export default Dashboard