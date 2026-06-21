import React from 'react'
import UseStatePractice from './react_practice/useStatePractice'
import TwoWayBinding from './react_practice/twowaybinding'
import Notes from './react_practice/notes'
import Gallery from './react_practice/gallery'
import Pagenotfound from './react_practice/pagenotfound'
import {  Routes, Route } from 'react-router-dom'

const Routerapp = () => {
  return (
        <Routes>
        <Route path='/' element={<UseStatePractice />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/loginpage' element={<TwoWayBinding />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
  )
}

export default Routerapp