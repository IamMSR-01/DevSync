import React from 'react'
import TopMenuBar from '../components/TopMenuBar'
import ActivityBar from '../components/ActivityBar'
import Sidebar from '../components/Sidebar'
import Welcome from '../components/Welcome'

function RoomPage() {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex flex-col">
      <TopMenuBar />
      <div className='mt-4 flex border-t border-gray-700'>
        <ActivityBar />
        <Sidebar />
        <Welcome />
      </div>
    </div>
  )
}

export default RoomPage