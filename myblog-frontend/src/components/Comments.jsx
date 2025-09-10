import { useState } from 'react'
import Client from '../../services/Api'
import '../assets/Comments.css'

const Comments = ({ blogId, initialComments }) => {
  const [comments, setComments] = useState(initialComments || [])
  const [newComment, setNewComment] = useState('')
  const [error, setError] = useState(null)

 
  const addComment = async (e) => {
    e.preventDefault()
    if (!newComment) 
      
    return

    try {
      const res = await Client.post('/comments', { blogId, message: newComment })
      setComments([...comments, res.data])
      setNewComment('')
    } catch (err) {
      console.log(err)
      setError('Cannot add comment')
    }
  }


  const deleteComment = async (id) => {
    try {
      await Client.delete(`/comments/${id}`)
      setComments(comments.filter(comment => comment._id !== id))
    } catch (err) {
      console.log(err)
      setError('Cannot delete comment')
    }
  }

  return (
    <div className='comments-container'>
      <h3>Comments</h3>
      {error && <p>{error}</p>}

      <form onSubmit={addComment} className='comment-field'>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit" className='post-btn'>Post</button>
      </form>

      {comments.length === 0 && <p className='empty'>No comments yet</p>}

      {comments.map(comment => (
        <div key={comment._id}>
          <p className='author-name'>
            by {comment.userId?.first_name} {comment.userId?.last_name}: {comment.message}
          </p>
          <button onClick={() => deleteComment(comment._id)} className='delete-btn'>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Comments
