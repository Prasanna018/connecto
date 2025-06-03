import React from 'react'
import { Input } from './ui/input'

const SearchInput = () => {
    return (
        <div className='w-full '>
            <Input
                placeholder='Search'
                type='text'
                className=' w-full  mx-2  md:w-80 rounded-xl border-none outline-none bg-slate-200'
            ></Input>

        </div>
    )
}

export default SearchInput

