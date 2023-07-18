const { Schema } = require('mongoose')

const reviewSchema = new Schema({
  gameId: { type: Schema.Types.ObjectId, ref: 'Game', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  review: { type: String, required: true }
})

module.exports = reviewSchema
