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
  '/show',
  middleware.stripToken,
  middleware.verifyToken,
  controller.ShowRating
)

module.exports = router
