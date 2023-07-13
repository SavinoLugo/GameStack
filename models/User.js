const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    favorites: [
      {
        gameId: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        apiRating: { type: Number, required: true },
        image: { type: String, required: true }
      }
    ],
    ratings: [
      {
        gameId: { type: String, required: true },
        rating: { type: Number, required: true }
      }
    ]
  },
  { timestamps: true }
)

module.exports = userSchema
