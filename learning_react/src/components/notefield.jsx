import React from 'react'
const Notefield = (props) => {
  return (
        <div className=" bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')]  border-2 gap-1 h-52 w-40  p-2 rounded-xl text-black bg-cover bg-center">
                <h4 className='font-bold leading-tight mt-4'>#{props.title}</h4><br />
                <p className="leading-tight">{props.content}</p>
                <button onClick={() => {props.ondelete(props.id)}} className="px-2 py-1 bg-red-500 text-white rounded mt-2">Delete</button>
        </div>)
}

export default Notefield