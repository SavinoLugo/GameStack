const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Game' }],
    ratings: [{ type: Schema.Types.ObjectId, ref: 'Rating' }],
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
  },
  { timestamps: true }
)

module.exports = userSchema
