import React from 'react'
import { Outlet } from 'react-router-dom'
import SlideBar from '../components/admin/SlideBar'

const DashBoardPage = () => {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
      <SlideBar/>
      <Outlet/>
    </div>
  )
}

export default DashBoardPage