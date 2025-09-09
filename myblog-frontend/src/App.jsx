import { useState } from 'react'
import Register from './components/pages/Register'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <Routes>
  <Route path="/auth/register" element={<Register />} />
    </Routes>
  )
}

export default App
