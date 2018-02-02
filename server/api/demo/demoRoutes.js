var router = require('express').Router()
var logger = require('../../util/logger')
var controller = require('./demoController')

router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/getpopularads')
  .get(controller.getPopularAds)

module.exports = router
