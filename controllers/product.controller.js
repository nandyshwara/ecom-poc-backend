const Product = require("../models/product.model")


const createProduct = async(req,res) => {

    const {productName ,productStock, productPrice } = req.body

    try{
        const data = await Product.create({
            productName : productName,
            productStock : productStock,
            productPrice : productPrice
        })
        console.log(data)
        res.status(200).json({
            data : data,
            message : "product successfully created"
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
           error : error
        })
    }
}

const getAllProducts = async(req,res) => {

    try{
        const data = await Product.find()
        console.log(data)
        res.status(200).json({
            data : data,
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
           error : error
        })
    }
}

const getById = async(req,res) => {
    const {id} = req.params
    try{
        const data = await Product.findById(id)
        console.log(data)
        res.status(200).json({
            data : data,
        })
    }
    catch(error){
        console.log(error)
        res.status(500).json({
           error : error
        })
    }
}


module.exports = {
    createProduct,
    getAllProducts,
    getById
}