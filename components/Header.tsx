import Link from 'next/link'
import React from 'react'

interface HeaderProps {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className='flex flex-col lg:px-24'>
            <div className='flex justify-between items-center lg:py-8'>
                <Link href={'/'}>
                    <h1 className='text-xl font-bold text-rose-text'>Veronas pizzaria</h1>
                </Link>
                <div className='flex items-center justify-center space-x-4'>
                    <Link href={'/menu'}>
                        <h1 className='text-xl font-semibold text-rose-text hover:underline'>Cardápio</h1>

                    </Link>
                    <Link href={'/account'}>
                        <button className='px-4 py-2 bg-rose-text rounded-full'>
                        <h1 className='text-xl text-white'>Meus pedidos</h1>

                        </button>
                    </Link>
                </div>
            </div>
            {children}
        </header>
    )
}

export default Header