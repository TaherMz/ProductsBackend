const Product = require("../models/productModel");



const addProduct = async (req, res) => {
  const newProduct = new Product(req.body);
  try{
    const product = await newProduct.save();
    res.status(200).json({
      success: "true",
      data : product
    });
  } catch(err) {
    res.status(404).json({
      success: "false",
    msg:err
    });
  } 
};


const updateProduct =async(req, res) => {
  try{
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
    success: "product has been successfully updated",
    data : product
    });
  } catch(err){      
    err => console.log(err);
  }
};




const deleteProduct = async (req, res) => {
  try{
    const product = await Product.findByIdAndDelete(req.params.productId);
    console.log(product,"Deleted");
    res.status(200).json({
    success: "True , product deleted",
    data : product
    }); 
  } catch(err){
    err => console.log(err);
  }
};

const getProducts = async (req, res) => {
  try{
    const products = await Product.find();
    res.status(200).json({
    success: "True",
    data : products
    }); 
  } catch(err){
        res.status(404).json({
          success: "false",
          msg:err
        
      })
  }
}

const getProduct = async (req, res) => {
  try{
    const product = await Product.findById(req.params.productId, req.body);
    res.status(200).json({
    success: "True",
    data : product
    }); 
  } catch(err){
    err => console.log(err);
  }
};



module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProduct,
 
};
