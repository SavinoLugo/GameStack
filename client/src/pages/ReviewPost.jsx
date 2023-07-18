import { useState, useEffect } from 'react'
import {
  addReviewPost,
  getReviewPost,
  updateReviewPost,
  deleteReviewPost
} from '../services/reviewPost'

const ReviewPost = () => {
  const [posts, setPosts] = useState([])
  const [reviewForm, setReviewForm] = useState({
    review: '',
    gamerTag: '',
    gameTitle: ''
  })
  const [updateForm, setUpdateForm] = useState({
    review: '',
    gamerTag: '',
    gameTitle: ''
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const [currentPostId, setCurrentPostId] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const handleDelete = async (postId) => {
    try {
      await deleteReviewPost(postId)
      setSubmitted(!submitted)
    } catch (error) {
      console.error('Failed to delete post:', error)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await addReviewPost(reviewForm)
    setSubmitted(!submitted)
    setReviewForm({ review: '', gamerTag: '', gameTitle: '' })
  }

  const handleUpdate = (postId, postDetails) => {
    setUpdateForm(postDetails)
    setCurrentPostId(postId)
    setIsUpdating(true)
  }

  const handleUpdateChange = (event) => {
    setUpdateForm({ ...updateForm, [event.target.name]: event.target.value })
  }

  const handleUpdateSubmit = async (event) => {
    event.preventDefault()
    await updateReviewPost(currentPostId, updateForm)
    setIsUpdating(false)
    setSubmitted(!submitted)
  }

  const handleChange = (event) => {
    setReviewForm({ ...reviewForm, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    const getPosts = async () => {
      let response = await getReviewPost()
      setPosts(response)
    }
    getPosts()
  }, [submitted])

  return (
    <div>
      <h1>Review Posts</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="GamerTag"
            name="gamerTag"
            onChange={handleChange}
            value={reviewForm.gamerTag}
          />
          <input
            placeholder="Game Title"
            name="gameTitle"
            onChange={handleChange}
            value={reviewForm.gameTitle}
          />
          <input
            placeholder="Review"
            name="review"
            onChange={handleChange}
            value={reviewForm.review}
          />
          <button
            type="submit"
            disabled={
              !reviewForm.gamerTag ||
              !reviewForm.gameTitle ||
              !reviewForm.review
            }
          >
            Add
          </button>
        </form>
        {isUpdating && (
          <form onSubmit={handleUpdateSubmit}>
            <input
              placeholder="GamerTag"
              name="gamerTag"
              onChange={handleUpdateChange}
              value={updateForm.gamerTag}
            />
            <input
              placeholder="Game Title"
              name="gameTitle"
              onChange={handleUpdateChange}
              value={updateForm.gameTitle}
            />
            <input
              placeholder="Review"
              name="review"
              onChange={handleUpdateChange}
              value={updateForm.review}
            />
            <button type="submit">Update</button>
          </form>
        )}
      </div>
      {posts?.map((post) => (
        <div key={post._id}>
          <h5>Gamer Tag: {post.gamerTag}</h5>
          <h5>Game Title: {post.gameTitle}</h5>
          <h5>{post.review}</h5>
          <button
            onClick={() =>
              handleUpdate(post._id, {
                review: post.review,
                gamerTag: post.gamerTag,
                gameTitle: post.gameTitle
              })
            }
          >
            Update
          </button>
          <button onClick={() => handleDelete(post._id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ReviewPost
