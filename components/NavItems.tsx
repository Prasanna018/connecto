import { Bell, BriefcaseBusiness, Home, MessageCircleMore, Network } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

// type NAVITEM = {
//     src: string,
//     icon: JSX.Element
//     text: string
// }
interface NAVITEM {
    src: string,
    icon: JSX.Element
    text: string
}


const NAVITEMS: NAVITEM[] = [
    {
        src: '/home',
        icon: <Home></Home>,
        text: 'Home'
    },
    {
        src: '/networks',
        icon: <Network></Network>,
        text: 'Networks'
    },
    {
        src: '/jobs',
        icon: <BriefcaseBusiness></BriefcaseBusiness>,
        text: 'Jobs'
    },
    {
        src: '/message',
        icon: <MessageCircleMore></MessageCircleMore>,
        text: 'Message'
    },
    {
        src: '/notification',
        icon: <Bell></Bell>,
        text: 'Notification'
    },
]
const NavItems = () => {
    return (
        <div className='flex gap-8'>
            {
                NAVITEMS.map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center cursor-pointer text-gray-400 hover:text-black'>
                            <span>{item.icon}</span>
                            <Link className='md:text-xs lg:text-sm' href={item.src}>
                                {item.text}
                            </Link>


                        </div>
                    )
                })
            }

        </div>
    )
}

export default NavItems
