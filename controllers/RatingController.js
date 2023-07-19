const { Rating } = require('../models')

const AddRating = async (req, res) => {
  let newRating = await Rating.create(req.body)
  res.send(newRating)
}

const ShowRating = async (req, res) => {
  let rating = await Rating.find()
  res.send(rating)
}

module.exports = {
  AddRating,
  ShowRating
}
