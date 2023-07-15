const { Schema } = require('mongoose')

const gameSchema = new Schema(
  {
    gameId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    apiRating: { type: Number, required: true },
    image: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = gameSchema
