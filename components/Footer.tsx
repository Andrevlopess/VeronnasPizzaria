import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flex flex-col'>
      <div className='w-full border-t border-dashed border-orange-200 flex justify-between my-4 py-12 flex-wrap gap-4'>
        <div>
          <h1 className='text-xl md:text-2xl font-bold text-orange-500'>Veronnas pizzaria</h1>
          <h3 className='text-sm md:text-lg font-semibold text-orange-400'>
            Crie sua própria pizza como quiser!
          </h3>
        </div>

        <div>
          <h1 className='text-md md:text-xl font-bold text-orange-500'>Horário de funcionamento</h1>
          <h3 className='text-sm md:text-lg font-semibold text-orange-400'>
            Todos os dias das <span className='text-orange-600'>18h00 </span>ás
            <span className='text-orange-600'> 23h00</span>
          </h3>
        </div>
      </div>
      <h1 className='text-center border-t border-dashed border-orange-400 py-4'>
        Site criado e desenvolvido por <br/>
        <span className='font-black'> André Vitor Lopes</span>
      </h1>

    </footer>

  )
}

export default Footer