import Image from 'next/image'
import React from 'react'

interface DemonstrarionProps {
    description: string
    image: string
}

const Demonstration = ({ description, image }: DemonstrarionProps) => {
    return (
        <div className='border rounded-md p-4 flex flex-col gap-2 items-center justify-between hover:border-orange-300 transition hover:shadow-xl'>
            <Image
                src={image}
                width={100}
                height={100}
                alt={description}
            />
            <h2 className='text-gray-600 font-semibold text-md text-center'>
                {description}
            </h2>
        </div>
    )
}

export default Demonstration