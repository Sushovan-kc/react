import React from 'react'

const Notefield = (props) => {
  return (
        <div className="flex flex-col bg-lime-100 border-2 gap-1 h-30  p-2 rounded-lg text-black">
                <h4>{props.title}</h4><br />
                <p>{props.content}</p>
        </div>)
}

export default Notefield