import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Client from '../../../services/Api'
import '../../assets/Profile.css'

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
    <div className='profile-container'>
       <button onClick={() => navigate(-1)}>← Back</button>
      <h1 className='profile-header'>My Profile</h1>
      <p>First Name:</p>
      <p className='text-container'>{profile.first_name}</p>
<p>Last Name: </p>
      <p className='text-container'>{profile.last_name}</p>
      <p>Email:</p>
      <p className='text-container'>{profile.email}</p>
      {profile.phone_number && <p className='text-container'>Phone: {profile.phone_number}</p>}

      <button onClick={() => navigate('/edit-profile')} className='edit-btn'>Edit Profile</button>

<button onClick={handleDelete} className='delete-btn'>
        Delete Profile
      </button>
    </div>
  )
}

export default Profile
