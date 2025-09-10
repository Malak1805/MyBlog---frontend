import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../../services/Blogs'
import '../assets/AddBlog.css'

const AddBlog = () => {

  const [Data, setData] = useState({
    title: '',
    description: ''
  })

  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createBlog(Data)
      navigate('/') 
    } catch (error) {
      console.error(error)
      setError('Failed to create blog')
    }
  }

  return (
    <div className="addBlog-container">
       <button onClick={() => navigate(-1)}>← Back</button>
      <h1>Create a New Blog</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="blog-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={Data.title}
            onChange={handleChange}
            className='blog-container'
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={Data.description}
            onChange={handleChange}
            className='blog-container'
            required
          />
        </label>
        <button type="submit" className='add-btn'>Add Blog</button>
      </form>
    </div>
  )
}

export default AddBlog
