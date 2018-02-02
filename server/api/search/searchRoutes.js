var router = require('express').Router()
var logger = require('../../util/logger')
var controller = require('./searchController')

router.route('/')
  .post(controller.post)
  .get(controller.get)

module.exports = router
