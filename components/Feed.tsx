import React from 'react'
import PostInput from './PostInput'

const Feed = async ({ user }: { user: any }) => {
    const userData = await JSON.parse(JSON.stringify(user))

    return (
        <div className='flex-1 border-2 p-2'>
            <PostInput user={userData}>
            </PostInput>


        </div>
    )
}

export default Feed
