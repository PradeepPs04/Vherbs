import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from '../components/core/dashboard/SideBar'

export const Dashboard = () => {
  return (
    <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
        <SideBar/>

        <div className='w-full min-h-[calc(100vh-3.5rem)]'>
            <div className='mx-auto w-11/12 max-w-[1000px] py-10 px-4'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}
