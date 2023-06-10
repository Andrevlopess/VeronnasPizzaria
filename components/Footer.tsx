import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full border-t flex justify-between my-4 p-4'>
        <h2 className='text-sm md:text-lg font-semibold text-orange-500'>veronnas pizzaria</h2>
        <h2 className='text-sm md:text-lg font-semibold text-orange-500'>andre v lopes</h2>
    </div>
  )
}

export default Footer