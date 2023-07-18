import { addReviewPost, getReviewPost } from '../services/reviewPost'
import { useState, useEffect } from 'react'

const ReviewPost = () => {
  const [posts, setPosts] = useState([])
  const [reviewForm, setReviewForm] = useState({
    review: '',
    gamerTag: '',
    gameTitle: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let response = await addReviewPost(reviewForm)
    setSubmitted(!submitted)
    setReviewForm({ review: '' })
  }

  const handleChange = (event) => {
    setReviewForm({ ...reviewForm, [event.target.name]: event.target.value })
  }

  useEffect(() => {
    const getPosts = async () => {
      let response = await getReviewPost()
      console.log(response)
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
          <button type="submit">Add</button>
        </form>
      </div>
      {posts?.map((post) => (
        <div key={post._id}>
          <h5>Gamer Tag: {post.gamerTag}</h5>
          <h5>Game Title: {post.gameTitle}</h5>
          <h4>{post.review}</h4>
        </div>
      ))}
    </div>
  )
}

export default ReviewPost
