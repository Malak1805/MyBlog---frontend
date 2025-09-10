import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../../services/Api'

const EditProfile = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: ''
  })

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const res = await Client.get('/auth/profile', {
            headers: { Authorization: `Bearer ${token}` }
          })
          setProfile(res.data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchProfile()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      await Client.put('/auth/profile', profile, {
        headers: { Authorization: `Bearer ${token}` }
      })
      navigate('/profile')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={profile.first_name}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={profile.last_name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          required
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone_number"
          value={profile.phone_number || ''}
          onChange={handleChange}
        />

        <button type="submit">Update Profile</button>
      </form>
    </div>
  )
}

export default EditProfile
