import express from 'express';
import { listCategories, addCategory, showEditCategoryForm, editCategory, removeCategory , showAddCategoryForm} from '../controllers/categoryController.js';

const router = express.Router();

router.get('/', listCategories); 
router.get('/create', showAddCategoryForm); 
router.post('/create', addCategory);
router.get('/edit/:id', showEditCategoryForm);
router.post('/update/:id', editCategory);
router.get('/delete/:id', removeCategory);

export default router;
