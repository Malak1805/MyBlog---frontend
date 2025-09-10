import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Comments from './Comments'
import Client from '../../services/Api'
import '../assets/Blogdetail.css'

const BlogDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await Client.get(`/blogs/${id}`)
        setBlog(res.data.blog)
        setComments(res.data.comments || [])
      } catch (error) {
        console.log(error)
      }
    }

    fetchBlog()
  }, [id])

  if (!blog) return null 

  return (
    <div className='BlogDetail-container'>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1 className='blogName'>{blog.title}</h1>
      <p className='blogDescription'>{blog.description}</p>

      <Comments blogId={blog._id} initialComments={comments} />
    </div>
  )
}

export default BlogDetails
