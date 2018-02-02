var router = require('express').Router();

// Mount other routers
router.use('/users', require('./user/userRoutes'))
router.use('/demo', require('./demo/demoRoutes'))

module.exports = router;