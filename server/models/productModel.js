const mongoose=require('mongoose')
const productSchema=mongoose.Schema({
title:{
    type:String,require:true
},
desc:{
    type:String,require:true

},
createdAt:{
    type:Date,
    default:new Date,
},
owner:{
    type:mongoose.Schema.Types.ObjectId,
    // refernce to the collection
    ref:"users"
}

})

const Product=mongoose.model('product',productSchema)
module.exports=Product