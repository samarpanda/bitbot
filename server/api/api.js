var router = require('express').Router();

// Mount other routers
router.use('/users', require('./user/userRoutes'))
router.use('/demo', require('./demo/demoRoutes'))
router.use('/search', require('./search/searchRoutes'))
router.use('/bitbot', require('./bitbot/bitbotRoutes'))

module.exports = router;