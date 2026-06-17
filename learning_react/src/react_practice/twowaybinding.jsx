import { React, useState } from 'react'

const TwoWayBinding = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Username:', username)
        console.log('Password:', password)
        setUsername('')
        setPassword('')
    }

  return (
    <div className='flex bg-gray-100 flex-col items-center justify-center h-screen gap-5'>
        <div >
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center border-2 border-gray-300 p-5 rounded-lg bg-white gap-5'>
            <input 
                className='px-4 py-2 border-2 border-gray-300 rounded-xl'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='px-4 py-2 border-2 border-gray-300 rounded-xl'
            />
            <button type="submit" className='px-4 py-2 bg-red-500 text-rounded'>
                Submit
            </button>
        </form>
        </div>

    </div>
  )
}

export default TwoWayBinding