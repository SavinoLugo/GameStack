const router = require('express').Router()
const controller = require('../controllers/RatingController')
const middleware = require('../middleware')

router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddRating
)
router.get(
  '/:gameId/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ShowRating
)

module.exports = router
