import React, { useContext } from 'react'
import Nav from './Nav'
import { MyContext } from '@/Helper/Context'


const Header = (props) => {
    const user = useContext(MyContext)
  return (
    <div className='bg-green-200 p-4'>
        {user}
        <Nav Num={props.Num}/>
    </div>
  )
}

export default Header