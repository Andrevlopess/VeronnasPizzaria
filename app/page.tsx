import Image from "next/image";

import BordaFinaSvg from '../public/PizzasIllustrations/Borda Fina.svg'
import BordaGrossaSvg from '../public/PizzasIllustrations/Borda grossa.svg'
import BordaRecheadaSvg from '../public/PizzasIllustrations/Borda Recheada.svg'
import BordaSimplesSvg from '../public/PizzasIllustrations/Borda Simples.svg'
import MolhoDeTomateSvg from '../public/PizzasIllustrations/Molho de tomate.svg'
import MolhoBrancoSvg from '../public/PizzasIllustrations/molho branco.svg'

import Presunto from '../public/ingredientes/presunto.svg'
import Queijo from '../public/ingredientes/Queijo.svg'
import Tomate from '../public/ingredientes/Tomate.svg'
import Milho from '../public/ingredientes/Milho.svg'

import OriPizzaImg from '../public/OriPizza.svg'
import Demonstration from "@/components/Demonstration";
import Link from "next/link";
import { BsArrowRight } from 'react-icons/bs'


export default function Home() {
  return (
    <main className="flex w-full flex-col py-24 min-h-[80vh] items-center justify-center border-x border-dashed border-orange-200">
      <div className="flex flex-col w-full items-center justify-center gap-16 mb-8">
        <div className="flex flex-col items-center gap-4 border-y w-full border-dashed border-orange-200 py-4">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-transparent text-center bg-clip-text">Sua pizza é você quem faz</h1>
          <h1 className="text-xl md:text-2xl text-orange-600 font-semibold text-center">Na Veronna's pizzaria você escolhe a borda, molho e todos os ingredientes que quiser!</h1>
          <Link href='/mypizza'
                className="bg-orange-500 rounded-lg flex items-center justify-center text-white gap-4 py-4 px-6 col-span-2 mt-4 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:shadow-xl transition focus:ring-2 focus:ring-orange-300">
                <h1>Pedir minha pizza</h1>
                <BsArrowRight />
              </Link>
        </div>

        <Image
          src={OriPizzaImg}
          alt="pizza icon"
          width={600}
          height={600}
          className="drop-shadow-2xl hover:scale-105 transition"
        />
      </div>
      <section className="flex flex-col justify-center items-center gap-4">

        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-transparent text-center bg-clip-text border-t w-full border-dashed border-orange-200 py-4">Sua pizza em 3 passos</h1>

        <div className="w-full grid lg:grid-cols-3 gap-4 md:grid-cols-2">
          <div className="flex flex-col border-2 border-dashed rounded-md border-orange-300 p-4 gap-4">
            <h1 className="text-orange-600 text-3xl font-bold flex items-center gap-4">
              <span className="text-5xl font-black text-orange-500">1</span> Escolha a borda</h1>
            <div className="grid grid-cols-2 gap-2">
              <Demonstration
                image={BordaFinaSvg}
                description="Borda fina"
              />
              <Demonstration
                image={BordaGrossaSvg}
                description="Borda grossa"
              />
              <Demonstration
                image={BordaRecheadaSvg}
                description="Borda recheada"
              />
              <Demonstration
                image={BordaSimplesSvg}
                description="Borda simples"
              />
            </div>
          </div>
          <div className="flex flex-col border-2 border-dashed rounded-md border-orange-300 p-4 gap-4">
            <h1 className="text-orange-600 text-3xl font-bold flex items-center gap-4">
              <span className="text-5xl font-black text-orange-500">2</span>Escolha o Molho</h1>
            <div className="grid grid-cols-2 gap-2 ">
              <Demonstration
                image={MolhoBrancoSvg}
                description="Molho branco"
              />
              <Demonstration
                image={MolhoDeTomateSvg}
                description="Molho de tomate"
              />
            </div>
          </div>
          <div className="flex flex-col border-2 border-dashed rounded-md border-orange-300 p-4 gap-4">
            <h1 className="text-orange-600 text-2xl font-bold flex items-center gap-4">
              <span className="text-5xl font-black text-orange-500">3</span>Escolha os ingredientes</h1>
            <div className="grid grid-cols-2 gap-2">
              <Demonstration
                image={Milho}
                description="Milho"
              />
              <Demonstration
                image={Queijo}
                description="Queijo"
              />
              <Demonstration
                image={Presunto}
                description="Presunto"
              />
              <Demonstration
                image={Tomate}
                description="Tomate"
              />
              <Link href='/mypizza'
                className="bg-orange-500 rounded-lg flex items-center justify-center text-white gap-4 py-2 px-4 col-span-2 hover:bg-orange-600 transition focus:ring-2 focus:ring-orange-300">
                <h1>Ver mais ingredientes</h1>
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>


    </main >
  )
}

//   <Image
//                 src={PizzaIcon}
//                 alt="pizza icon"
//                 width={40}
//                 height={40}
//                 className="group-hover:rotate-90 transition"
//               />