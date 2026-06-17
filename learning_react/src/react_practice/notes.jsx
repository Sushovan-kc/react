import { useState } from 'react'
import React from 'react'
import Notefield from '../components/notefield'
    



const Notes = () => {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted by', title)
    setTitle('')
    setContent('')
}

  return (
    <div className='bg-black text-lime-400 h-screen flex flex-col'>
        <h1 className="text-2xl font-bold text-center">Notes</h1>
    <div className="flex gap-5 top-0 left-0 p-5">
        <form className="flex flex-col items-left w-1/3 border-2 border-b-lime-400 p-5 rounded-lg bg-black text-lime-300 gap-5" onSubmit={handleSubmit}>
            <input 
                className="px-4 py-2 border-2 border-lime-300 rounded-xl"   
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                className="px-4 py-2 border-2 border-lime-300 rounded-xl h-32 justify-start "   
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className="px-4 py-2 bg-lime-500 text-white rounded">
                Add Note
            </button>
        </form>
   
    <div className="flex flex-col border-2 overflow-auto w-2/3 border-b-lime-400 p-5 rounded-lg bg-black text-lime-300 gap-5">
        <div>
            <h2 className="text-xl font-bold">Recent Notes</h2>
        </div>
        <div>
            <Notefield title="Sample Note" content="This is a sample note." />
            {/* <div className="flex flex-row bg-lime-100 border-2 gap-5 h-20  p-5 rounded-lg text-black">
                    <p>this is note.</p>
            </div> */}
        </div>
    </div>
     </div>
    </div>
  )
}

export default Notes