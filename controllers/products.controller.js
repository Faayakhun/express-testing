let products = require("../models/products")

module.exports = {
    getProduct : (req,res)=> {
        res.json ({
            message: "success get users",
            data: products
        })
    },

    getProductById: (req,res)=> {
        const id = req.params.id
    
        const product = products.find(item => item.id == id)
        res.json({
            message: "success get user",
            data: product
        })
    },

    addProduct: (req,res)=> {
        const product = req.body
        console.log(product)
    
        products.push(product)
        res.json({
            message: "success adding new user",
            data: products
        })
    },

    deleteProduct: (req,res)=> {
        const id = req.params.id
        const product=products.filter(item=>item.id != id)
        console.log(product)
        products=product
        res.json({
            message: "success deleting user",
            data: products
        })
    },

    editProduct : (req,res)=> {
        const id = req.params.id
        const newProduct = req.body
        for (let i=0; i < products.length; i++) {
            let product = products[i]
            if (product.id == id) {
                products[i] = newProduct
            }
        }
        
        res.json({
            message: "success updating user",
            data: products
        })
    },
}