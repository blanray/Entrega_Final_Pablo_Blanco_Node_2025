import productModel from "../models/product.model.js";

const getAll = async () => {
  return await productModel.getAllProducts();
};

const createProduct = async (product) => {
  return await productModel.saveProduct(product);
};

const getByID = async(id) =>{
  return await productModel.getProductByID(id);
};

const deleteProduct = async(id) =>{
  return await productModel.deleteProductByID(id);
};

export default { getAll, createProduct, getByID, deleteProduct };
