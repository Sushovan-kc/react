import { React,useState } from 'react'

const UseStatePractice = () => {
    const [count, setCount] = useState(0)

    const increase =()=> {
        setCount(count + 1)
    }
    const decrease =()=>{
        setCount(count - 1)
    }
    const reset =()=> {
        setCount(0)
    }
    const increaseBy5 =()=> {
        setCount(count + 5)
    }
    const decreaseBy5 =()=> {
        setCount(count - 5)
    }

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5'>
        <h1 className='text-5xl font-bold text-colorgray'>{count}</h1>
        <div className='flex gap-5'>
            <button onClick={increase} className='px-4 py-2 bg-blue-500 text-white rounded'>Increase</button>
            <button onClick={decrease} className='px-4 py-2 bg-red-500 text-white rounded'>Decrease</button>
            <button onClick={reset} className='px-4 py-2 bg-gray-500 text-white rounded'>Reset</button>
            <button onClick={increaseBy5} className='px-4 py-2 bg-green-500 text-white rounded'>Increase by 5</button>
            <button onClick={decreaseBy5} className='px-4 py-2 bg-yellow-500 text-white rounded'>Decrease by 5</button>
        </div>
    </div>
  )
}

export default UseStatePractice