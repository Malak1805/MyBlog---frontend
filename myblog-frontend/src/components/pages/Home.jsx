import { useEffect, useState } from 'react'
import { getAllBlogs } from '../../../services/Blogs'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {

  const [blogs, setBlogs] = useState([])
   const navigate = useNavigate()

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getAllBlogs()
        setBlogs(data)
      } catch (error) {
        console.error('Failed to fetch blogs:', error)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div className="home-container">
      <button onClick={() => navigate('/add-blog')}>
  + Create Blog
</button>
      <h1>All Blogs</h1>
      {blogs.length === 0 ? (
        <p>No blogs to display</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className="blog-container">
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link to={`/blogs/${blog._id}`}>Read More</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home
