import Image from 'next/image'
import React from 'react'
import { Avatar } from '../ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'

const ProfilePhoto = ({ src }: { src: string }) => {
    return (
        <div>
            <Avatar


            >
                <AvatarImage
                    src={src}

                    width={40}
                    height={40}
                    className='w-full h-full'

                >

                </AvatarImage>

            </Avatar>

        </div>
    )
}

export default ProfilePhoto
