const { Schema } = require('mongoose')

const reviewPostSchema = new Schema({
  gamerTag: { type: String, required: true },
  gameTitle: { type: String, required: true },
  review: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
})

module.exports = reviewPostSchema
