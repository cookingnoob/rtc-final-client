import React, { useContext, useEffect, useState } from 'react'
import ListsSideBar from '../components/ListsSideBar'
import { Context } from '../components/Context'

const Dashboard = () => {
  const { probando } = useContext(Context)
  console.log(probando)
  return (
    <>

      <ListsSideBar />
    </>
  )
}

export default Dashboard