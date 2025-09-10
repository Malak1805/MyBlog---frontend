
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import Home from './components/pages/Home'
import AddBlog from './components/AddBlog'
import BlogDetails from './components/Blogdetail'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Profile from './components/pages/Profile'
import About from './components/pages/About'
import EditProfile from './components/EditProfile'

import { Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
 

  return (
    <div>
      <NavBar />
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/about" element={<About />}/>
  <Route path="/edit-profile" element={<EditProfile />} />
  <Route path="/auth/register" element={<Register />} />
   <Route path="/auth/login" element={<Login />} />
   <Route path="/add-blog" element={<AddBlog />} />
   <Route path="/blogs/:id" element={<BlogDetails />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
