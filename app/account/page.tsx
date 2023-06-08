'use client'

import React, { useState } from 'react'

type Props = {}

const page = async (props: Props) => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <div className='border border-gray-300 p-4 rounded-lg'>
      <input type='email' value={email} onChange={handleChange} />
      <h2>{email}</h2>
    </div>

  )
}

export default page