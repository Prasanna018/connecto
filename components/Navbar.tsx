import Image from 'next/image'
import React from 'react'

import SearchInput from './SearchInput'
import NavItems from './NavItems'
import { SignedIn, SignedOut, SignIn, SignInButton, SignUp, SignUpButton, UserButton } from '@clerk/nextjs'
import { Button } from './ui/button'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='w-full fixed bg-white/70 z-50 p-1'>
            <div className='flex justify-between items-center h-14 mx-auto max-w-6xl px-3'>
                <div className='flex gap-4 items-center '>
                    <Link href={'/'}>
                        <Image
                            src={'/logo.png'}
                            width={40}
                            height={40}
                            alt='logo'
                        >

                        </Image>

                    </Link>
                    <div className='w-full md:block hidden'>
                        <SearchInput></SearchInput>

                    </div>


                </div>
                <div className='flex items-center gap-5'>
                    <div className='md:flex hidden'>

                        <NavItems></NavItems>
                    </div>
                    <div>

                        <SignedIn>

                            <UserButton />


                        </SignedIn>



                        <SignedOut>
                            <Button className='mx-2 '

                                variant={'ghost'}>

                                <SignInButton mode='modal'></SignInButton>

                            </Button>
                            <Button className='mx-2' >

                                <SignUpButton mode='modal'></SignUpButton>
                            </Button>

                        </SignedOut>


                    </div>


                </div>
            </div>


        </div>
    )
}

export default Navbar
