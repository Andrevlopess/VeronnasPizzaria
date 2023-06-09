

import PizzaForm from '@/components/PizzaForm'
import React from 'react'
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

type Props = {}

const page = async (props: Props) => {

  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <div className='w-full py-4'>
      <div className='mb-16'>
        <h1 className='text-5xl font-black bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 text-transparent text-center mb-2'>Monte uma pizza 100% a sua cara</h1>
        <h4 className='text-xl font-semibold text-orange-600 text-center'>Escolha sua borda, molho e ingredientes como quiser!</h4>
      </div>


      {user ? (
        <PizzaForm />
      ) : (
        <h2>
          faça o login
        </h2>
      )}

    </div>
  )
}

export default page