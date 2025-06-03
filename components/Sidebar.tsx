import Image from 'next/image'
import React from 'react'
import ProfilePhoto from './shared/ProfilePhoto'

const Sidebar = ({ user }: { user: any }) => {
    console.log(user)
    return (
        <div className='hidden md:block w-[20%] h-fit shadow-lg p-2 border-gray-400 bg-white/90'>
            <div className='flex relative flex-col items-center'>
                <div className='w-full h-16 overflow-hidden'>
                    {
                        user && (
                            <Image src={'/banner.jpg'} height={200} width={200} alt='banner'
                                className='rounded-lg w-full h-full object-cover'
                            >

                            </Image>
                        )
                    }

                </div>
                <div className='absolute my-1 top-10'>

                    <ProfilePhoto src={user ? user?.imageUrl : ""}></ProfilePhoto>
                </div>

                <div className='w-full border-b-2 mt-4 p-2 flex flex-col justify-center items-center'>
                    <h1 className='font-semibold'>{user ? user.fullName : ""}</h1>

                    <p className='text-sm text-gray-400'>{user ? `@${user?.firstName}` : ""}</p>

                </div>

                <div className='text-sm p-2 w-full '>
                    <div className=' hover:bg-slate-100 duration-200 rounded-sm cursor-pointer flex items-center gap-4 w-full justify-between px-3 py-2'>
                        <span>Posts</span>
                        <span className='text-blue-400'>88</span>
                    </div>
                    <div className='hover:bg-slate-100 duration-200 rounded-sm cursor-pointer  flex items-center gap-4 w-full justify-between px-3 py-2'>
                        <span> Impression</span>
                        <span className='text-blue-400'>99</span>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Sidebar
