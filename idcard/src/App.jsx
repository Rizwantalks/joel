import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Photocard from './page/Photocard'

function App() {
  

  return (
    <>
  <Routes>

 
  <Route path='/card' element={<Photocard/>} />
  </Routes>
   
    </>
  )
}

export default App
