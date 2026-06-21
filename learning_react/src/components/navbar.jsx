import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold'>My React Apps</h1>
        <div>
            <Link to="/" className='px-3 py-2 rounded hover:bg-gray-700'>Home</Link>
            <Link to="/notes" className='px-3 py-2 rounded hover:bg-gray-700'>Notes</Link>
            <Link to="/gallery" className='px-3 py-2 rounded hover:bg-gray-700'>Gallery</Link>
            <Link to="/loginpage" className='px-3 py-2 rounded hover:bg-gray-700'>Login</Link>
        </div>

    </div>
  )
}

export default Navbar