
import PizzaForm from '@/components/PizzaForm'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { LoginButton } from '@/components/buttons.component';

type Props = {}

const page = async (props: Props) => {

  const session = await getServerSession(authOptions);
  const user = session?.user;


  return (
    <div className='w-full py-4'>
      {true ? (
        <>
          <div className='my-8'>
            <h1 className='text-2xl md:text-5xl font-black bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 text-transparent text-center mb-2'>Monte uma pizza 100% a sua cara</h1>
            <h4 className='text-lg md:text-xl font-semibold text-orange-600 text-center'>Escolha sua borda, molho e ingredientes como quiser!</h4>
          </div>
          <PizzaForm />
        </>

      ) : (
        <div className='flex flex-col gap-4 items-center justify-center min-h-[80vh] border border-orange-300 border-dashed rounded-lg p-4'>
          <h1 className='text-2xl md:text-4xl font-black bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-transparent text-center mb-2'>Faça seu login para começar a montar sua pizza!</h1>
          <LoginButton />
        </div>
      )}

    </div>
  )
}

export default page