const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AllReviewPosts
)
router.post(
  '/new',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddReviewPost
)
router.put(
  '/update/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReviewPost
)
router.delete(
  '/delete/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteReviewPost
)

module.exports = router
