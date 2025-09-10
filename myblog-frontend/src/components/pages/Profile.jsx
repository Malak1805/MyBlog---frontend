import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../../../services/Api'

const Profile = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const res = await Client.get('/auth/profile', {
            headers: { Authorization: `Bearer ${token}` }
          })
          setProfile(res.data)
        } else {
          setError('User not logged in')
        }
      } catch (err) {
        setError('Failed to load profile')
      } 
    }

    fetchProfile()
  }, [])

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token')
      await Client.delete('/auth', {
        headers: { Authorization: `Bearer ${token}` }
      })
      localStorage.removeItem('token')
      navigate('/')
      } catch {
    }
  }

  if (!profile) return null 


  return (
    <div>
      <h1>My Profile</h1>
      <p>First Name: {profile.first_name}</p>
      <p>Last Name: {profile.last_name}</p>
      <p>Email: {profile.email}</p>
      {profile.phone_number && <p>Phone: {profile.phone_number}</p>}

      <button onClick={() => navigate('/edit-profile')}>Edit Profile</button>

<button onClick={handleDelete}>
        Delete Profile
      </button>
    </div>
  )
}

export default Profile
