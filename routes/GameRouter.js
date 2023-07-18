const router = require('express').Router()
const controller = require('../controllers/GameController')
const middleware = require('../middleware')

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
router.delete(
  '/remove/:userId/:gameId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.RemoveGame
)

module.exports = router
