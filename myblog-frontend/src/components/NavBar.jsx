import { Link } from 'react-router-dom'
import '../assets/NavBar.css'
const NavBar = () => {
  const ifLogged = localStorage.getItem('token')

  return (
    <nav className="nav-bar">
      <img src="public\MyBlog.png" alt="Logo" />
      <Link to="/" className="nav-links">
        Home
      </Link>
      {ifLogged && (
        <Link to="/profile" className="nav-links">
          My Profile
        </Link>
      )}

      {!ifLogged && (
        <Link to="/auth/register" className="nav-links">
          Register
        </Link>
      )}
      {!ifLogged && (
        <Link to="/auth/login" className="nav-links">
          Login
        </Link>
      )}
      <Link to="/about" className="nav-links">
        About
      </Link>
    </nav>
  )
}

export default NavBar
