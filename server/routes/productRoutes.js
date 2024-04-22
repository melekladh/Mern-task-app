const express=require('express')
const router=express.Router()
const {createProduct, deleteProduct}=require('../controllers/productControllers')
// we verify if the token is correct by using a middlewqare
const userMidlleware=require('../middlewares/userMiddleware')

router.post('/addproduct',userMidlleware,createProduct)
router.delete('/deleteproduct/:id',userMidlleware,deleteProduct)

module.exports=router