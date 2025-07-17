import { auth, signIn, signOut } from '@/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { CiLogout } from "react-icons/ci";
import { IoMdCreate } from "react-icons/io";

const Navbar = async () => {
    const session = await auth()
    return (
        <header className='px-5 py-3 bg-white shadow-sm'>
            <nav className=' flex justify-between items-center'>
                <Link href='/'>
                    <img src='https://res.cloudinary.com/dyaz7lhkb/image/upload/v1752217495/Group_5_kw8arh.png' alt='Logo' width={144} height={30}></img>
                </Link>
                <div className='flex items-center gap-5 text-black'>
                    {
                        session && session?.user ? (
                            <>
                                <Link href='/startup/create'>
                                    <span className='max-sm:hidden'>Create</span>
                                    <IoMdCreate className='size-6 sm:hidden text-green-400' />
                                    
                                </Link>

                                <form action={async () => {
                                    'use server';
                                    await signOut();
                                    redirect('/');
                                }}>
                                    <button type='submit' className='cursor-pointer'>
                                        <span className='max-sm:hidden'>SignOut</span>
                                        <CiLogout className='size-6 sm:hidden text-red-600' />
                                    </button>

                                </form>

                                <Link href={`/user/${session?.id}`} >
                                    <img src={session?.user?.image} alt={session?.user?.name} width={48} height={48} className='rounded-full'/>

                                </Link>
                            </>
                        ) : (
                            <form action={async () => {
                                'use server';
                                await signIn("github");
                            }
                            }>
                                <button type='submit' className='cursor-pointer'>Login</button>

                            </form>
                        )
                    }
                </div>
            </nav>
        </header >
    )
}

export default Navbar
