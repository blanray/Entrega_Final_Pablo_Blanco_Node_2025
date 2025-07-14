//router
import { Router } from "express";
import productController from '../controllers/product.controller.js'

const router = Router()


router.get('/',productController.getProducts)
router.post("/create", productController.createProduct);
router.get("/:id", productController.getProductByID);
router.delete("/:id", productController.deleteProductByID)

export default router
