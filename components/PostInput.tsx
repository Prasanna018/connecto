'use client';
import React, { useState } from 'react'

import ProfilePhoto from './shared/ProfilePhoto'
import { Input } from './ui/input'
import { PostDialog } from './PostDialog'

const PostInput = ({ user }: { user: any }) => {
    const [open, setOpen] = useState<boolean>(false);

    const inputHandler = () => {
        setOpen(true)

    }
    return (
        <div className='bg-white/90   p-4 m-2 md:m-0 border-gray-300 border rounded-xl'>
            <div className='flex w-full gap-4 justify-between items-center'>
                <ProfilePhoto src={user?.imageUrl}></ProfilePhoto>
                <Input
                    type='text'
                    placeholder='Write a Post'
                    className='w-full rounded-2xl p-4 h-12'
                    onClick={() => inputHandler()}
                ></Input>

            </div>
            <PostDialog setOpen={setOpen} open={open} src={user?.imageUrl}></PostDialog>

        </div>
    )
}

export default PostInput


