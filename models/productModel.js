const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
  
  name: {
    type: String,
    required: true
  }, 
  productCode: {
    type: String,
    required: true,
    unique:true,

  },
  quantity: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  model:{
    type: String,
    required: true
  },
  category_id:{
    type: String,
    required: true
  }


})




const Product = mongoose.model("Product", productSchema);
module.exports = Product;
