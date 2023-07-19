const { Rating } = require('../models')

const AddRating = async (req, res) => {
  let newRating = await Rating.create(req.body)
  res.send(newRating)
}

const ShowRating = async (req, res) => {
  let rating = await Rating.findOne({
    user: req.params.userId,
    gameId: req.params.gameId
  })
  res.send(rating)
}

module.exports = {
  AddRating,
  ShowRating
}
