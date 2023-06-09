import React from 'react'
import { PizzaOptionProps } from './PizzaOption'

interface PizzaOrderProps {
    borderType: PizzaOptionProps;
    sauceType: PizzaOptionProps;
    selectedIngredients: PizzaOptionProps[]
}

const PizzaOrder: React.FC<PizzaOrderProps> = ({
    borderType,
    sauceType,
    selectedIngredients
}) => {
    
    return (
        <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-start flex-col '>
            <h2 className='text-xl font-semibold'>
                Seu pedido
            </h2>
            <div className='flex gap-2 flex-col w-full'>
                <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-start hover:border-orange-300 w-full justify-between group'>
                    {borderType.description === "Borda Recheada"
                        ?
                        <>
                            <h2 className='text-lg font-semibold text-gray-800'>
                                Borda recheada
                            </h2>
                            <h2 className='text-lg font-semibold text-gray-800 group-hover:text-orange-800 transition'>
                                R$ 8,00
                            </h2>
                        </>


                        :
                        <h2 className='text-lg font-semibold text-gray-800'>
                            {`${borderType.description}`}
                        </h2>
                    }
                </div>
                <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-start hover:border-orange-300'>
                    <h2 className='text-lg font-semibold text-gray-800'>
                        {sauceType?.description}
                    </h2>
                </div>

                <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-center hover:border-orange-300'>
                    <h2 className='text-lg font-semibold text-gray-800'>
                        Ingredientes:
                    </h2>
                    <div className='flex gap-2 flex-wrap'>

                        {selectedIngredients.map(ingredient => {
                            return (
                                <h2 className='text-lg font-semibold text-gray-800 border border-gray-300 p-2 rounded-md hover:border-orange-300'>
                                    {ingredient.description}
                                </h2>
                            )
                        })
                        }
                    </div>
                </div>
                <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-start hover:border-orange-300 justify-between group'>
                    <h2 className='text-lg font-semibold text-gray-800'>
                        Valor
                    </h2>
                    <h2 className='text-lg font-semibold text-gray-800 group-hover:text-orange-800 transition'>
                        {borderType.description === "Borda Recheada" ? (
                            "R$ 68,00"
                        ) : ("R$ 60,00")}
                    </h2>
                </div>
            </div>

            <button className='rounded-lg p-4 flex gap-4 items-center hover:border-orange-300 bg-orange-500 focus:ring-2 focus:ring-orange-300 w-full justify-center'>
                <h2 className='text-xl font-semibold text-white'>
                    Enviar pedido
                </h2>
            </button>
        </div>      
  )
}

export default PizzaOrder