const { Schema } = require('mongoose')

const reviewSchema = new Schema({
  gameId: { type: String, required: true },
  review: { type: String, required: true }
})

module.exports = reviewSchema
