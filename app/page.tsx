import Feed from '@/components/Feed'
import News from '@/components/News'
import Sidebar from '@/components/Sidebar'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const Home = async () => {
  const user = await currentUser();

  return (
    <div className='mt-20'>
      <div className='flex justify-between max-w-6xl mx-auto gap-2
       '>
        {/* sideBar */}
        <Sidebar user={user}></Sidebar>
        {/* feed */}
        <Feed user={user}></Feed>


        {/* news */}
        <News></News>
      </div>

    </div>
  )
}

export default Home
