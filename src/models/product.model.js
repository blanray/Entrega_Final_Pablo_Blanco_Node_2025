import {db} from '../config/db.js';

import {collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';

const productCollection = collection(db, "productos");

const getAllProducts = async () => {
  try {
  
    const productList = await getDocs(productCollection);

    const products = [];
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));
   
    return products;
  } catch (error) {
    throw new Error('Se ha producido el siguiente error en la base: ', error.message)
  }
};

const saveProduct = async (product) => {
  try {
    const newProduct = await addDoc(productCollection, product);
    return {id: newProduct.id}
  } catch (error) {
    throw new Error('Se ha producido el siguiente error en la base: ', error.message)
  }
};

const getProductByID = async (id)=>{
  try {
    const miDocTemp = doc(productCollection, id);
    const product = await getDoc(miDocTemp);
      
    return (product.data()) 
  } catch (error) {
    throw new Error('Se ha producido el siguiente error en la base: ', error.message)
  }
};

const deleteProductByID = async (id)=>{
  try {
    const miDocTemp = doc(productCollection, id);
    const product = await deleteDoc(miDocTemp);
      
    return ({message: "Elemento borrado satisfactoriamente"}) 
  } catch (error) {
    throw new Error('Se ha producido el siguiente error en la base: ', error.message)
  }
};



export default {getAllProducts, saveProduct, getProductByID, deleteProductByID};