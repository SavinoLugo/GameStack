const router = require('express').Router()
const controller = require('../controllers/GameController')
const middleware = require('../middleware')
//Routes
//Getall games
//Get a game by Id
//Delete a game/Remove from favorites

router.get(
  '/favorites/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllGames
)
router.post(
  '/new/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddGame
)
// router.get('/:gameId', middleware.stripToken, middleware.verifyToken)
// router.delete('/:gameId', middleware.stripToken, middleware.verifyToken)

module.exports = router
