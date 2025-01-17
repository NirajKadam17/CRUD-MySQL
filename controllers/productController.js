import { getAllProducts, createProduct, updateProduct, deleteProduct, countProducts, getProductById } from '../models/product.js';
import { getAllCategoriesWithoutPagination } from '../models/category.js';

export const listProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const products = await getAllProducts(limit, offset);
  const total = await countProducts();
  res.render('product', {
    products,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
  });
};

export const addProduct = async (req, res) => {
  const { name, categoryId } = req.body;
  await createProduct(name, categoryId);
  res.redirect('/products');
};

export const showEditProductForm = async (req, res) => {
  const { id } = req.params;
  const product = await getProductById(id);
  console.log(product);
  res.render('updateProduct', { product });
};

export const editProduct = async (req, res) => {
  const { id } = req.params;
  const { name, categoryId } = req.body;
  await updateProduct(id, name, categoryId);
  res.redirect('/products');
};

export const removeProduct = async (req, res) => {
  const { id } = req.params;
  await deleteProduct(id);
  res.redirect('/products');
};

export const showAddProductForm = async (req, res) => {
  const categories = await getAllCategoriesWithoutPagination();
  res.render('addProduct', { categories });
}; 
