const mongoose = require('mongoose')
const userSchema = require('./User')
const gameSchema = require('./Game')

const User = mongoose.model('User', userSchema)
const Game = mongoose.model('Game', gameSchema)

module.exports = {
  User,
  Game
}
