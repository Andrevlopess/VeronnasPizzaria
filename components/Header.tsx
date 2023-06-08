import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='flex flex-col'>
            <div className='flex justify-between items-center lg:py-8'>
                <Link href={'/'}>
                    <h1 className='text-xl font-bold text-orange-600'>Veronas pizzaria</h1>
                </Link>
                <div className='flex items-center justify-center space-x-4'>
                    <Link href={'/menu'}>
                        <h1 className='text-xl font-semibold text-orange-600 hover:underline'>Cardápio</h1>

                    </Link>
                    <Link href={'/account'}>
                        <button className='px-4 py-2 bg-orange-600 rounded-full'>
                            <h1 className='text-xl text-white'>Meus pedidos</h1>

                        </button>
                    </Link>
                </div>
            </div>

        </header>
    )
}

export default Header