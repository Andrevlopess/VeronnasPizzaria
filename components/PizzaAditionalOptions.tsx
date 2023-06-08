import React from 'react'
import PizzaOptionGroup from './PizzaOptionGroup';
import PizzaOption from './PizzaOption';

import Cheddar from '../public/ingredientes/Cheddar.svg';
import Queijo from '../public/ingredientes/Queijo.svg';
import CreamCheese from '../public/ingredientes/CreamCheese.svg';


interface PizzaAditionalOptionProps {
  isStuffedBorder?: boolean;
}

const PizzaAditionalOptions: React.FC<PizzaAditionalOptionProps> = ({
  isStuffedBorder
}) => {


  return (
    <div className='border border-gray-300 p-4 flex flex-col rounded-lg gap-6 flex-1 min-w-[500px] '>
      <h2 className='text-xl font-semibold'>
        Opções adicionais:
      </h2>
      <div className='flex gap-2 flex-col'>
        {isStuffedBorder &&

          <PizzaOptionGroup
            title='Escolha o sabor da sua borda recheada'
            onChange={() => { }}
          >
            <PizzaOption
              image={Queijo}
              imageOnPizza={Queijo}
              description="Mussarela"
              isIngredient
            />
            <PizzaOption
              image={Cheddar}
              imageOnPizza={Cheddar}
              description="Cheddar"
              isIngredient
            />
            <PizzaOption
              image={CreamCheese}
              imageOnPizza={CreamCheese}
              description="Cream Cheese"
              isIngredient
            />
          </PizzaOptionGroup>
        }
      </div>
    </div>

  )
}

export default PizzaAditionalOptions