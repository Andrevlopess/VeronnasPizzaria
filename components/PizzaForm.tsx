'use client'

import MolhoDeTomateSvg from '../public/PizzasIllustrations/Molho de tomate.svg'
import MolhoBrancoSvg from '../public/PizzasIllustrations/molho branco.svg'
import BordaFinaSvg from '../public/PizzasIllustrations/Borda Fina.svg'
import BordaGrossaSvg from '../public/PizzasIllustrations/Borda grossa.svg'
import BordaRecheadaSvg from '../public/PizzasIllustrations/Borda Recheada.svg'
import BordaSimplesSvg from '../public/PizzasIllustrations/Borda Simples.svg'

import Atum from '../public/ingredientes/Atum.svg'
import Azeitona from '../public/ingredientes/Azeitona.svg'
import Bacon from '../public/ingredientes/Bacon.svg'
import Brocolis from '../public/ingredientes/Brocolis.svg'
import Calabresa from '../public/ingredientes/calabresa.svg'
import Cebola from '../public/ingredientes/Cebola.svg'
import Champingnon from '../public/ingredientes/Champingnon.svg'
import Frango from '../public/ingredientes/Frango.svg'
import Ovo from '../public/ingredientes/Ovo.svg'
import Presunto from '../public/ingredientes/presunto.svg'
import Queijo from '../public/ingredientes/Queijo.svg'
import Tomate from '../public/ingredientes/Tomate.svg'
import Milho from '../public/ingredientes/Milho.svg'

import BaconOnPizza from '../public/OnPizza/BaconOnPizza.svg'
import BrocolisOnPizza from '../public/OnPizza/BrocolisOnPizza.svg'
import CalabresaOnPizza from '../public/OnPizza/CalabresaOnPizza.svg'
import EggOnPizza from '../public/OnPizza/EggOnPizza.svg'
import CheeseOnPizza from '../public/OnPizza/CheeseOnPizza.svg'
import ChampingnonOnPizza from '../public/OnPizza/ChampingnonOnPizza.svg'
import PresuntoOnPizza from '../public/OnPizza/PresuntoOnPizza.svg'
import TomatoOnPizza from '../public/OnPizza/TomatoOnPizza.svg'
import CornOnPizza from '../public/OnPizza/CornOnPizza.svg'
import BordaFinaOnPizza from '../public/OnPizza/BordaFinaOnPizza.svg'
import BordaGrossaOnPizza from '../public/OnPizza/BordaGrossaOnPizza.svg'
import BordaRecheadaOnPizza from '../public/OnPizza/BordaRecheadaOnPizza.svg'
import MolhoDeTomateOnPizza from '../public/OnPizza/MolhoDeTomateOnPizza.svg'
import MolhoBrancoOnPizza from '../public/OnPizza/MolhoBrancoOnPizza.svg'
import AzeitonaOnPizza from '../public/OnPizza/AzeitonaOnPizza.svg'
import OnionOnPizza from '../public/OnPizza/OnionOnPizza.svg'
import AtumOnPizza from '../public/OnPizza/AtumOnPizza.svg'
import FrangoOnPizza from '../public/OnPizza/FrangoOnPizza.svg'

import PizzaOption, { PizzaOptionProps } from "./PizzaOption"
import PizzaOptionGroup from './PizzaOptionGroup'
import { useState } from 'react'
import PizzaOptionGroupMultiple from './PizzaOptionGroupMultiple'
import Image from 'next/image'
import PizzaAditionalOptions from './PizzaAditionalOptions'
import PizzaOrder from './PizzaOrder'

const PizzaForm = () => {

    const [sauceType, setSauceType] = useState<PizzaOptionProps | null>(null)
    const [borderType, setBorderType] = useState<PizzaOptionProps | null>(null)
    const [borderThickness, setBorderThickness] = useState<PizzaOptionProps | null>(null)
    const [message, setMessage] = useState<string | undefined>()
    const [selectedIngredients, setSelecteIngredients] = useState<PizzaOptionProps[]>([])

    const handleChangeIngredients = (ingredients: PizzaOptionProps[]) => {
        setSelecteIngredients(ingredients)
    }

    const pizzaOptions: PizzaOptionProps[] = [
        {
            image: Ovo,
            imageOnPizza: EggOnPizza,
            description: "Ovo"
        },
        {
            image: Bacon,
            imageOnPizza: BaconOnPizza,
            description: "Bacon"
        },
        {
            image: Brocolis,
            imageOnPizza: BrocolisOnPizza,
            description: "Brocolis"
        },
        {
            image: Calabresa,
            imageOnPizza: CalabresaOnPizza,
            description: "Calabresa"
        },
        {
            image: Champingnon,
            imageOnPizza: ChampingnonOnPizza,
            description: "Champingnon"
        },
        {
            image: Queijo,
            imageOnPizza: CheeseOnPizza,
            description: "Queijo"
        },
        {
            image: Presunto,
            imageOnPizza: PresuntoOnPizza,
            description: "Presunto"
        },
        {
            image: Milho,
            imageOnPizza: CornOnPizza,
            description: "Milho"
        },
        {
            image: Tomate,
            imageOnPizza: TomatoOnPizza,
            description: "Tomate"
        },
        {
            image: Cebola,
            imageOnPizza: OnionOnPizza,
            description: "Cebola"
        },
        {
            image: Azeitona,
            imageOnPizza: AzeitonaOnPizza,
            description: "Azeitona"
        },
        {
            image: Atum,
            imageOnPizza: AtumOnPizza,
            description: "Atum"
        },
        {
            image: Frango,
            imageOnPizza: FrangoOnPizza,
            description: "Frango"
        },

    ];


    return (
        <div className="border border-gray-300 rounded-lg w-full p-4 grid gap-4 items-start my-6 md:grid-cols-2 grid-cols-1">
            <div className='gap-8 flex flex-col'>
                <div className="flex flex-col space-y-6">

                    <PizzaOptionGroup
                        onChange={(option) => setBorderThickness(option)}
                        title="Escolha o a grossura da sua borda:">
                        <PizzaOption
                            image={BordaGrossaSvg}
                            imageOnPizza={BordaGrossaOnPizza}
                            description="Borda Grossa" />
                        <PizzaOption
                            image={BordaFinaSvg}
                            imageOnPizza={BordaFinaOnPizza}
                            description="Borda Fina" />
                    </PizzaOptionGroup>

                    <PizzaOptionGroup
                        onChange={(option) => setBorderType(option)}
                        title="Escolha o tipo da sua borda:">
                        <PizzaOption
                            image={BordaRecheadaSvg}
                            imageOnPizza={BordaRecheadaOnPizza}
                            description="Borda Recheada" />
                        <PizzaOption
                            image={BordaSimplesSvg}
                            imageOnPizza={BordaFinaOnPizza}
                            description="Borda Simples" />
                    </PizzaOptionGroup>

                    <PizzaOptionGroup
                        onChange={(option) => setSauceType(option)}
                        title="Escolha seu tipo de Molho:"
                        disabled={!borderType}
                    >

                        <PizzaOption
                            image={MolhoBrancoSvg}
                            imageOnPizza={MolhoBrancoOnPizza}
                            description="Molho Branco" />

                        <PizzaOption
                            image={MolhoDeTomateSvg}
                            imageOnPizza={MolhoDeTomateOnPizza}
                            description="Molho de Tomate" />
                    </PizzaOptionGroup>

                    <PizzaOptionGroupMultiple
                        possiblesChoices={5}
                        title='Escolha até cinco ingredientes:'
                        onChange={handleChangeIngredients}
                        disabled={!sauceType}
                    >

                        {
                            pizzaOptions.map((option) => {
                                return (
                                    <PizzaOption
                                        image={option.image}
                                        imageOnPizza={option.imageOnPizza}
                                        description={option.description}
                                        isIngredient
                                        key={option.description}
                                    />
                                )
                            })
                        }

                    </PizzaOptionGroupMultiple>

                </div>


            </div >

            <div className='flex flex-col sticky top-4 gap-4'>
                <div className='border border-gray-300 p-4 flex items-center flex-col rounded-lg gap-6 '>
                    {borderThickness ?
                        <>
                            <h2 className='text-xl font-semibold'>
                                Veja como está ficando sua pizza
                            </h2>
                            <div className=' flex items-center justify-center h-[200px]
             w-[200px]'>

                                {borderThickness && borderType?.description !== "Borda Recheada" &&
                                    <Image
                                        src={borderThickness.imageOnPizza}
                                        width={200}
                                        height={200}
                                        alt={`${borderThickness.description} image`}
                                        className='absolute'
                                        key={borderThickness.description}
                                    />
                                }
                                {borderType?.description === "Borda Recheada" &&
                                    <Image
                                        src={borderType.imageOnPizza}
                                        width={200}
                                        height={200}
                                        alt={`${borderType.description} image`}
                                        className='absolute'
                                        key={borderType.description}
                                    />
                                }

                                {
                                    sauceType &&
                                    <Image
                                        src={sauceType.imageOnPizza}
                                        width={180}
                                        height={180}
                                        alt={`${sauceType.description} image`}
                                        className='absolute'
                                        key={sauceType.description}
                                    />
                                }
                                {
                                    selectedIngredients.map((ingredient) => {

                                        return (
                                            <Image
                                                src={ingredient.imageOnPizza}
                                                width={200}
                                                height={200}
                                                alt="Borda fina pizza"
                                                className='absolute'
                                                key={ingredient.description}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </>

                        :
                        <h2 className='text-xl font-semibold'>
                            Sua pizza irá aparecer aqui!
                        </h2>
                    }

                </div>

                {
                    borderType?.description === "Borda Recheada" &&
                    <PizzaAditionalOptions
                        isStuffedBorder={borderType?.description === 'Borda Recheada'}
                    />
                }

                <div className='border border-gray-300 p-4 flex flex-col rounded-lg gap-4'>
                    <h2 className='text-xl font-semibold'>
                        Deixar recado:
                    </h2>
                    <input
                        className='border border-gray-300 rounded-md w-full px-4 py-2 outline-none focus:border-orange-400'
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder='Deixe alguma mensagem sobre sua pizza'
                    />
                </div>




                {
                    borderType
                    && sauceType
                    && selectedIngredients.length !== 0
                    && borderThickness
                    &&
                    <PizzaOrder
                        borderThickness={borderThickness}
                        borderType={borderType}
                        sauceType={sauceType}
                        message={message}
                        selectedIngredients={selectedIngredients} />
                }


            </div>


        </div >

    )

}


export default PizzaForm