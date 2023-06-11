import React, { useState } from 'react'
import { PizzaOptionProps } from './PizzaOption'
import LoadingComponent from './LoadingComponent';

interface PizzaOrderProps {
    borderType: PizzaOptionProps;
    sauceType: PizzaOptionProps;
    borderThickness: PizzaOptionProps;
    selectedIngredients: PizzaOptionProps[]
    message?: string;
}

const PizzaOrder: React.FC<PizzaOrderProps> = ({
    borderType,
    sauceType,
    borderThickness,
    selectedIngredients,
    message
}) => {


    const [isLoading, setIsLoading] = useState(false)

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
                            {`${borderType.description} com ${borderThickness.description}`}
                        </h2>
                    }
                </div>
                <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-start hover:border-orange-300'>
                    <h2 className='text-lg font-semibold text-gray-800'>
                        {sauceType?.description}
                    </h2>
                </div>

                <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-center hover:border-orange-300 flex-wrap'>
                    <h2 className='text-lg font-semibold text-gray-800'>
                        Ingredientes:
                    </h2>
                    <div className='flex gap-2 flex-wrap'>

                        {selectedIngredients.map(ingredient => {
                            return (
                                <h2
                                    key={ingredient.description}
                                    className='text-lg font-semibold text-gray-800 border border-gray-300 p-2 rounded-md hover:border-orange-300'>
                                    {ingredient.description}
                                </h2>
                            )
                        })
                        }
                    </div>
                </div>
                {message &&
                    <div className='border border-gray-300 rounded-lg p-4 flex gap-4 items-center hover:border-orange-300 group'>
                        <h2 className='text-lg font-semibold text-gray-800'>
                            Mensagem:
                        </h2>
                        <h3 className='italic text-gray-800 font-semibold'>
                            {message}
                        </h3>
                    </div>
                }

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

            <button
                onClick={() => {
                    setIsLoading(true)
                    setTimeout(() => {
                        setIsLoading(false)
                    }, 3000)
                }}
                className='rounded-lg p-4 flex gap-4 items-center hover:border-orange-300 bg-orange-500 focus:ring-2 focus:ring-orange-300 w-full justify-center'>
                {isLoading ? (
                    <LoadingComponent />
                ) : (
                    <h2 className='text-xl font-semibold text-white'>
                        Enviar pedido
                    </h2>

                )}

            </button>
        </div>
    )
}

export default PizzaOrder