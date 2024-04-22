const Product=require('../models/productModel')

// const  getProducts = async (req,res)=>{
//     try{
//         const products = await Product.find()
//         res.status(200).json(products)
//     }catch(err){
//         console.log(err);
//         res.status(500).send("Error Interno del Servidor")
//     }
// }

//Obtener un producto por su ID
// const getProductById = async (req,res)=>{
//    const {id}= req.params;
//    try{
//        const product =await Product.findById(id)
//        if(!product) return res.status(404).json({msg:"No se ha encontrado el producto"})
//        res.status(200).json(product)
//    }catch(e){
//        console.log(e);
//        res.status(500).json({msg: "Error interno del servidor"});
//    }
// }

//Create a new product
const createProduct = async (req,res)=>{
try {
    const{title,desc,userId}=req.body;
    const newProduct=await Product.create({title, desc, owner:userId})
    res.status(200).json(newProduct)
} catch (error) {
    res.status(500).json({msg:"something went wrong"})

}
}

const deleteProduct = async (req,res)=>{
    try {
        const productdeleted=await Product.findByIdandDelete(req.params.id)
        res.status(200).json(productdeleted)
    } catch (error) {
        res.status(500).json({msg:"something went wrong"})
    
    }
    }
// export  default {createProduct};
module.exports={createProduct,deleteProduct};