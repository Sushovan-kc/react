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

const handledelete = (index) => {
    const copyNotes = [...notes]
    copyNotes.splice(index, 1)
    setNotes(copyNotes)
    // console.log('delete note at index:', index)
}

  return (
   <div className='bg-black text-lime-400 flex flex-col h-screen overflow-hidden'>
    {/* Fixed Header */}
    <h1 className="text-2xl font-bold text-center py-4">Notes</h1>
    
    {/* Main Content Area - This fills up the remaining screen space */}
    <div className="flex-1 flex flex-row gap-5 px-5 pb-5 overflow-hidden">
        
        {/* Left Side: Form Container (Fixed/Sticky Height) */}
        <form className="flex flex-col w-1/3 border-2 border-lime-400 p-5 rounded-lg bg-black text-lime-300 gap-5 h-full" onSubmit={handleSubmit}>
            <input 
                className="px-4 py-2 border-2 border-lime-300 bg-black text-lime-400 rounded-xl focus:outline-none"   
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {/* Changed from input to textarea for a proper multi-line content area */}
            <textarea 
                className="px-4 py-2 border-2 border-lime-300 bg-black text-lime-400 rounded-xl flex-1 resize-none focus:outline-none"   
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" className="px-4 py-2 bg-lime-500 text-black font-bold rounded hover:bg-lime-400 active:scale-95 transition-transform duration-100">
                Add Note
            </button>
        </form>
   
        {/* Right Side: Recent Notes Container (Matches Form height precisely & scrolls internally) */}
        <div className="w-2/3 border-2 border-lime-400 p-5 rounded-lg bg-black text-lime-300 flex flex-col h-full overflow-hidden">
            <h2 className="text-xl font-bold mb-4">Recent Notes</h2>
            
            {/* Scrollable list area for your note cards */}
            <div className="overflow-y-auto pr-2 flex flex-wrap gap-4">
                {notes.map((note, index) => (
                    <Notefield key={index} id={index} title={note.title} content={note.content} ondelete={handledelete} />
                ))}
            </div>
        </div>

    </div>
</div>

  )
}

export default Notes