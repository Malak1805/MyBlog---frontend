import { Link } from "react-router-dom"

const NavBar = () => {

  return (
    <nav className="nav-bar">
          <Link to="/">Home</Link>
          {localStorage.getItem('token') && <Link to="/profile">My Profile</Link>}
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
    </nav>
  )
}

export default NavBar
