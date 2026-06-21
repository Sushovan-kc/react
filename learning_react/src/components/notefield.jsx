import React from 'react'
const Notefield = (props) => {
  return (
        <div className="  relative bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOI0reQLJbYio3nDn-3Do7tojc55WBcflQZPNwCsBcg&s=10')]  border-2 gap-1 h-52 w-40  p-2 rounded-xl text-black bg-cover bg-center">
                <button onClick={() => {props.ondelete(props.id)}} className="px-2 bg-red-500 text-white rounded-full absolute right-1 top-3 active:scale-95"
                        onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc2626'}} onMouseLeave={(e) => {e.target.style.backgroundColor = '#ef4444'}}
                        >X</button>
                <h4 className='font-bold leading-tight mt-4'>#{props.title}</h4><br />
                <p className="leading-tight text-wrap">{props.content}</p>
                
        </div>)
}

export default Notefield