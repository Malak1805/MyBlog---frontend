
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <Routes>
  <Route path="/auth/register" element={<Register />} />
   <Route path="/auth/login" element={<Login />} />
    </Routes>
  )
}

export default App
