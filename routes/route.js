const express = require('express')
const router = express.Router()
const productRouter = require('./products')


router.get('/', (req, res) => {
    res.json({
        message :'Welcome to the jungle'
      })
  })

router.use('/product',productRouter)
  

module.exports = router