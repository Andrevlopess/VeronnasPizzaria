import Image from "next/image";
import HeroPizzaImage from '../public/heroPizza.png'
import PizzaIcon from '../public/pizzaIcon.png'
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex w-full items-center">
      <div className="flex justify-between w-full items-center">
        <div className="flex flex-col space-y-8">
          <h1 className="text-7xl font-bold text-rose-text">A melhor pizza <br /> da região!</h1>
          <h3 className="text-3xl font-semibold text-rose-text">
            Suas pizza significa sua borda, massa, base e todos os ingredientes.
          </h3>
          <Link href='/mypizza'>
            <button className=" bg-rose-text rounded-full flex space-x-4 py-4 px-8 items-center group hover:shadow-md hover:shadow-rose-text transition">
              <h3 className="text-xl text-rose-background">
                Montar minha pizza
              </h3>
              <Image
                src={PizzaIcon}
                alt="pizza icon"
                width={40}
                height={40}
                className="group-hover:rotate-90 transition"
              />
            </button>
          </Link>

        </div>
        <Image
          src={HeroPizzaImage}
          alt="pizza image"
          width={500}
          height={500}
          className="drop-shadow-2xl"
        />
      </div>
      <div>
        
      </div>
    </main>
  )
}
