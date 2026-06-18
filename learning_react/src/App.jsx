import React from 'react'
import UseStatePractice from './react_practice/useStatePractice'
import TwoWayBinding from './react_practice/twowaybinding'
import Notes from './react_practice/notes'
const App = () => {
  return (
    <>
    <div>
      <UseStatePractice />
    </div>
    <div>
      <TwoWayBinding />
    </div>
    <div>
      <Notes />
    </div>
    <div>
      <h1 className='text-2xl font-bold text-center'>new app</h1>
    </div>
    </>
  )
}

export default App