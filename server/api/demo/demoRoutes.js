var router = require('express').Router()
var logger = require('../../util/logger')
var controller = require('./demoController')

// router.param('id', controller.params)
// router.get('/me', checkUser, controller.me)

router.route('/')
  .get(controller.get)
  // .post(controller.post)

// router.route('/:id')
//   .get(controller.getOne)
//   .put(checkUser, controller.put)
//   .delete(checkUser, controller.delete)

module.exports = router
