import React from 'react'
import PostInput from './PostInput'
import Post from './Post'

const Feed = async ({ user }: { user: any }) => {
    const userData = await JSON.parse(JSON.stringify(user))

    return (
        <div className='flex-1 border-2 p-2'>
            <PostInput user={userData}></PostInput>

            <Post></Post>

        </div>
    )
}

export default Feed
