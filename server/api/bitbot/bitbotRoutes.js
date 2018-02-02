var router = require('express').Router()
var controller = require('./bitbotController')

router.route('/')
  .post(controller.post)
  .get(controller.get)

module.exports = router
