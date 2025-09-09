import { SignInUser } from '../../../services/Auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const initialState = {
    email: '',
    password: ''
  }

  const [values, setValues] = useState(initialState)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await SignInUser(values)
      setValues(initialState)
      navigate('/')
    } catch (err) {
      console.error(err)
      setError(err.response?.data?.msg || 'Login failed')
    }
  }

  return (
    <div className="Login-Container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />

        {error && <p className="error-msg">{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
