import Navbar from '@/components/Navbar'
import React from 'react'

function Provider({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen bg-[#f3f2ee]'>

            <Navbar></Navbar>
            <div className="flex-1 w-full">
                <main className="max-w-6xl mx-auto">
                    {children}

                </main>
            </div>
        </div>
    )
}

export default Provider
