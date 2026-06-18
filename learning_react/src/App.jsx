import React from 'react'
import UseStatePractice from './react_practice/useStatePractice'
import TwoWayBinding from './react_practice/twowaybinding'
import Notes from './react_practice/notes'
import Gallery from './react_practice/gallery'
const App = () => {
  return (
    <>
    <div>
      <UseStatePractice />
    </div>
    <div>
      <TwoWayBinding />
    </div>
      <Notes />
      <Gallery />
    </>
  )
}

export default App