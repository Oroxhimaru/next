"use client"
import React, { useContext, useState } from 'react'
import Header from './components/Header'
import { MyContext } from '@/Helper/Context'

const page = () => {
 const user = useContext(MyContext);
  const [Num, setNum] = useState(10)
  return (
    <div>
      <Header Num={Num}/>
      {user}
    </div>
  )
}

export default page