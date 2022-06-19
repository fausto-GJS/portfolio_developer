const router = require('express').Router()

const projeto = require('./projeto')

require('../db/MongoDBConnection')

router.use('/projeto',projeto)

module.exports = router