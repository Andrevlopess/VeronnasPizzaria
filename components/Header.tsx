import Link from 'next/link'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginButton, LogoutButton } from "@/components/buttons.component";


const Header = async () => {


    const session = await getServerSession(authOptions);
    const user = session?.user;

    return (
        <header className='flex flex-col'>
            <div className='flex justify-between items-center lg:py-8'>
                <Link href={'/'}>
                    <h1 className='text-xl font-bold text-orange-600'>Veronas pizzaria</h1>
                </Link>
                <div className='flex items-center justify-center space-x-4'>
                    <Link href={'/menu'}>
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
            </div>

        </header>
    )
}

export default Header