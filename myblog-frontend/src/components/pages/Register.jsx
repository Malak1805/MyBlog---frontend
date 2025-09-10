import { RegisterUser } from '../../../services/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../assets/Register.css'

//register page
const Register = () => {
  const navigate = useNavigate()
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone_number: ''
  }
  const [Values, setValues] = useState(initialState)
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'confirm_password') {
      setConfirmPassword(value)
    } else {
      setValues({ ...Values, [name]: value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await RegisterUser(Values)
      setValues(initialState)
      setConfirmPassword('')
      navigate('/auth/login')
    } catch (error) {
      console.error(error)
      alert('Registration failed')
    }
  }

  const isValid =
    Values.password.length >= 8 && Values.password === confirmPassword

  return (
    <div className="Register-Container">
      <h1>Create Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={Values.first_name}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={Values.last_name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={Values.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={Values.password}
          onChange={handleChange}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirm_password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone_number"
          value={Values.phone_number}
          onChange={handleChange}
        />

        <button type="submit" disabled={!isValid}>
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
