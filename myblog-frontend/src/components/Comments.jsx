import { useState } from 'react'
import Client from '../../services/Api'

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
    <div>
      <h3>Comments</h3>
      {error && <p>{error}</p>}

      <form onSubmit={addComment}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button type="submit">Post</button>
      </form>

      {comments.length === 0 && <p>No comments yet</p>}

      {comments.map(comment => (
        <div key={comment._id}>
          <p>
            by {comment.userId?.first_name} {comment.userId?.last_name}: {comment.message}
          </p>
          <button onClick={() => deleteComment(comment._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Comments
