const Category = require("../models/categoryModel");



const addCategory = async (req, res) => {
  const newCategory = new Category(req.body);
  try{
    const category = await newCategory.save();
    res.status(200).json({
      success: "true",
      data : category
    });
  } catch(err) {
    res.status(404).json({
      success: "false",
    msg:err
    });
  } 
};


const updateCategory =async(req, res) => {
  try{
    const category = await Category.findByIdAndUpdate(req.params.categoryId, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
    success: "Category has been successfully updated",
    data : category
    });
  } catch(err){      
    err => console.log(err);
  }
};




const deleteCategory = async (req, res) => {
  try{
    const category = await Category.findByIdAndDelete(req.params.categoryId);
    console.log(category,"Deleted");
    res.status(200).json({
    success: "True , category deleted",
    data : category
    }); 
  } catch(err){
    err => console.log(err);
  }
};

const getCategories = async (req, res) => {
  try{
    const categories = await Category.find();
    res.status(200).json({
    success: "True",
    data : categories
    }); 
  } catch(err){
        res.status(404).json({
          success: "false",
          msg:err
        
      })
  }
}



module.exports = {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
 
};
