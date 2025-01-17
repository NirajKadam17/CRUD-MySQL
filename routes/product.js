import express from 'express';
import { listProducts, addProduct, showEditProductForm, editProduct, removeProduct, showAddProductForm } from '../controllers/productController.js';

const router = express.Router();

router.get('/', listProducts);
router.get('/create', showAddProductForm); 
router.post('/create', addProduct);
router.get('/edit/:id', showEditProductForm);
router.post('/update/:id', editProduct);
router.get('/delete/:id', removeProduct);

export default router;
