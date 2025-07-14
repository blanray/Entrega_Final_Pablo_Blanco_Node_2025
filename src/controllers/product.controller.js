import productService from "../services/product.service.js";

const getProducts = async (req, res) => {
try {
    const products = await productService.getAll();
    const mensaje = "Lista de Productos. Total de documentos: " + products.length

    if (products.length){
      res.status(200).json({message: mensaje, payload: products})
    }
    else {
      res.status(200).json({message: mensaje, payload:  "La lista está vacía"})
    }
    
} catch (error) {
    res.status(500).json({message: "Error interno del servidor.", error: error.message});
}
};

const createProduct = async (req, res) => {
  try {
    const { nombre, precio, cantidad } = req.body;
    // validar campos
    const newProduct = {
      nombre,
      precio: +precio || 0,
      cantidad: +cantidad || 0,
    };

    const nuevoProducto = await productService.createProduct(newProduct);
    const mensaje = "Producto Creado: "
    res.status(200).json({message: mensaje, payload:  nuevoProducto})
    } catch (error) {
    res.status(500).json({message: "Error interno del servidor en el controlador.", error: error.message});
  }
};

const getProductByID = async (req, res) => {
try {
    const { id } = req.params;
  
    const product = await productService.getByID(id);
   
    if (!product){
    const mensaje = "Producto no encontrado con ID: " + id
    return res.status(200).json({message: mensaje, payload: product})
    }
    else{
      
      const mensaje = "Producto encontrado con ID: " + id
    res.status(200).json({message: mensaje, payload:  product})}

} catch (error) {
    res.status(500).json({message: "Error interno del servidor.", error: error.message});
}
};

const deleteProductByID = async (req, res) => {
try {
    const { id } = req.params;
  
    const product = await productService.deleteProduct(id);
    const mensaje = "Producto eliminado con ID: " + id
    res.status(200).json({message: mensaje, payload:  product})

} catch (error) {
    res.status(500).json({message: "Error interno del servidor.", error: error.message});
}
};

export default {getProducts, createProduct, getProductByID, deleteProductByID};
