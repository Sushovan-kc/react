import { useState } from 'react'
import React from 'react'
import Notefield from '../components/notefield'
    



const Notes = () => {
const [title, setTitle] = useState('')
const [content, setContent] = useState('')
const [notes, setNotes] = useState([])


const handleSubmit = (e) => {
    e.preventDefault()

    const copyNotes = [...notes]
    copyNotes.push({ title, content })
    setNotes(copyNotes)
    setTitle('')
    setContent('')
}

  return (
    <div className='bg-black text-lime-400  flex flex-wrap flex-col'>
        <h1 className="text-2xl font-bold text-center">Notes</h1>
    <div className="flex gap-5 top-0 left-0 p-5">
        <form className="flex flex-col flex-wrap items-left h-full w-1/3 border-2 border-b-lime-400 p-5 rounded-lg bg-black text-lime-300 gap-5" onSubmit={handleSubmit}>
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
   
    <div className="flex flex-col lg:border-2 lg:overflow-auto  h-full w-2/3 border-b-lime-400 p-5 rounded-lg bg-black text-lime-300 gap-5">
        <div>
            <h2 className="text-xl font-bold">Recent Notes</h2>
        </div>
        <div className="flex flex-wrap items-start gap-5 h-full lg:overflow-auto">
            {notes.map((note, index) => (
                <Notefield key={index} title={note.title} content={note.content} />
            ))}
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