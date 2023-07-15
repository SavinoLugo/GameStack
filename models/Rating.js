const { Schema } = require('mongoose')

const ratingSchema = new Schema({
  gameId: { type: String, required: true },
  rating: { type: String, required: true }
})

module.exports = ratingSchema
