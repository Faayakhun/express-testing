const express = require('express')
const router = express.Router()
const {getProduct, getProductById, addProduct, deleteProduct, editProduct} = require('../controllers/products.controller')


router.get('/',getProduct)

router.get('/:id', getProductById)

router.post('/', addProduct)

router.delete('/:id', deleteProduct)

router.put('/:id', editProduct)

module.exports = router