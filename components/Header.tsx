
import Link from 'next/link'
// import React, { useState } from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginButton, LogoutButton } from "@/components/buttons.component";
import { TfiMenu } from 'react-icons/tfi'


const Header = async () => {


    const session = await getServerSession(authOptions);
    const user = session?.user;

    // const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='flex flex-col'>
            <div className='flex justify-between items-center py-4 lg:py-6'>
                <Link href={'/'}>
                    <h1 className='text-xl font-bold text-orange-600'>Veronas pizzaria</h1>
                </Link>

                <div className='hidden items-center justify-center space-x-4 md:flex '>
                    <Link href={'/mypizza'}>
                        <h1 className='text-xl font-semibold text-orange-600 hover:underline'>Minha Pizza</h1>

                    </Link>


                    {user ? (
                        <>
                            <Link href={'/account'}>
                                <button className="bg-orange-500 hover:shadow-md transition rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-orange-300" >
                                    Meus pedidos
                                </button>
                            </Link>
                            <LogoutButton />
                        </>

                    ) : (
                        <LoginButton />
                    )}
                </div>
                <div className='md:hidden flex'>
                    <TfiMenu size={25} className='text-orange-500' />
                    {/* {isOpen &&
                        <div className='flex'>
                            <Link href={'/mypizza'}>
                                <h1 className='text-xl font-semibold text-orange-600 hover:underline'>Minha Pizza</h1>

                            </Link>


                            {user ? (
                                <>
                                    <Link href={'/account'}>
                                        <button className="bg-orange-500 hover:shadow-md transition rounded-lg py-2 px-4 text-white focus:ring-2 focus:ring-orange-300" >
                                            Meus pedidos
                                        </button>
                                    </Link>
                                    <LogoutButton />
                                </>

                            ) : (
                                <LoginButton />
                            )}
                        </div>
                    } */}

                </div>
            </div>

        </header>
    )
}

export default Header