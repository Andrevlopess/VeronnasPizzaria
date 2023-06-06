'use client'

import MolhoDeTomateSvg from '../public/PizzasIllustrations/Molho de tomate.svg'
import MolhoBrancoSvg from '../public/PizzasIllustrations/molho branco.svg'
import BordaFinaSvg from '../public/PizzasIllustrations/Borda Fina.svg'
import BordaGrossaSvg from '../public/PizzasIllustrations/Borda grossa.svg'
import BordaRecheadaSvg from '../public/PizzasIllustrations/Borda Recheada.svg'
import BordaSimplesSvg from '../public/PizzasIllustrations/Borda Simples.svg'
import PizzaOption from "./PizzaOption"

import PizzaOptionGroup from './PizzaOptionGroup'
import { useState } from 'react'

const PizzaForm = () => {

    const [borderThickness, setBorderThickness] = useState<String | null>(null)
    const [sauceType, setSauceType] = useState<String | null>(null)
    const [borderType, setBorderType] = useState<String | null>(null)

    return (
        <div className="border border-gray-300 rounded-lg w-full p-6 gap-8 flex">
            <div className='gap-8 flex flex-col'>
                <div className="flex flex-col space-y-6">



                    <PizzaOptionGroup
                        onChange={(option) => setBorderThickness(option)}
                        title="Escolha a grossura da sua borda:">

                        <PizzaOption image={BordaGrossaSvg} description="Borda Grossa" />
                        <PizzaOption image={BordaFinaSvg} description="Borda Fina" />
                    </PizzaOptionGroup>

                    <PizzaOptionGroup
                        onChange={(option) => setSauceType(option)}
                        title="Escolha seu tipo de Molho:">
                        <PizzaOption image={MolhoBrancoSvg} description="Molho Branco" />
                        <PizzaOption image={MolhoDeTomateSvg} description="Molho de Tomate" />
                    </PizzaOptionGroup>

                    <PizzaOptionGroup
                        onChange={(option) => setBorderType(option)}
                        title="Escolha seu tipo de Borda:">
                        <PizzaOption image={BordaRecheadaSvg} description="Borda Recheada" />
                        <PizzaOption image={BordaSimplesSvg} description="Borda Simples" />
                    </PizzaOptionGroup>

                </div>


            </div >
            <div className="border border-gray-300 rounded-lg  p-6 gap-8 flex flex-1">
                <h1>{`Borda: ${borderType}`}</h1>
                <h1>{`Molho: ${sauceType}`}</h1>

            </div>

        </div >

    )

}


export default PizzaForm