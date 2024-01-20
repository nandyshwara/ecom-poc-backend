const express = require("express");
const { createProduct, getAllProducts, getById } = require("../controllers/product.controller");
const router = express.Router();


router.get("/",getAllProducts)
router.get("/:id",getById)
router.post("/create",createProduct)

module.exports = router