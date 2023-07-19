const { Schema } = require('mongoose')

const ratingSchema = new Schema(
  {
    gameName: { type: String, required: true },
    gameId: { type: Number, required: true },
    userRating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

module.exports = ratingSchema
