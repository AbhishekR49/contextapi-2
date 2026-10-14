import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex gap-7 justify-center items-center bg-gray-900 h-16 text-white text-xl font-bold'>
        <Link to='/' >Home</Link>
         <Link to='/about' >About</Link>
          <Link to='/login' >Login</Link>
    </nav>
  )
}

export default Navbar
