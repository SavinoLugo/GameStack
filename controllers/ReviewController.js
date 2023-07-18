const { ReviewPost } = require('../models')

const AddReviewPost = async (req, res) => {
  let newReviewPost = await ReviewPost.create(req.body)
  res.send(newReviewPost)
}

const AllReviewPosts = async (req, res) => {
  console.log('Inside of all posts')
  let posts = await ReviewPost.find()
  res.send(posts)
}

const UpdateReviewPost = async (req, res) => {
  try {
    const updatedPost = await ReviewPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    )
    res.send(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeleteReviewPost = async (req, res) => {
  try {
    await ReviewPost.deleteOne({ _id: req.params.id })
    res.send({ msg: 'Post Deleted', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddReviewPost,
  AllReviewPosts,
  UpdateReviewPost,
  DeleteReviewPost
}
