const reviewPostSchema = require('./ReviewPost')
const ratingSchema = require('./Rating')
const mongoose = require('mongoose')
const userSchema = require('./User')
const gameSchema = require('./Game')

const ReviewPost = mongoose.model('ReviewPost', reviewPostSchema)
const Rating = mongoose.model('Rating', ratingSchema)
const User = mongoose.model('User', userSchema)
const Game = mongoose.model('Game', gameSchema)

module.exports = {
  ReviewPost,
  Rating,
  User,
  Game
}
