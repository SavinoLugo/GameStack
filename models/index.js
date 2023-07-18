const mongoose = require('mongoose')
const userSchema = require('./User')
const gameSchema = require('./Game')
const reviewPostSchema = require('./ReviewPost')

const User = mongoose.model('User', userSchema)
const Game = mongoose.model('Game', gameSchema)
const ReviewPost = mongoose.model('ReviewPost', reviewPostSchema)

module.exports = {
  User,
  Game,
  ReviewPost
}
