const { Game, User } = require('../models')

const GetAllGames = async (req, res) => {
  let user = await User.findById(req.params.userId).populate('favorites')
  res.send(user.favorites)
}

const AddGame = async (req, res) => {
  const { id, name, description_raw, metacritic, background_image_additional } =
    req.body
  let gameObject = {
    gameId: id,
    title: name,
    description: description_raw,
    apiRating: metacritic,
    image: background_image_additional
  }
  let game = await Game.create(gameObject)
  let user = await User.findById(req.params.userId)
  user.favorites.push(game._id)
  await user.save()
  res.send(game)
}

module.exports = {
  GetAllGames,
  AddGame
}
