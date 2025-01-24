import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  countCategories,
  getCategoryById,
} from "../models/category.js";
import { getProductsByCategoryId, deleteProductsByCategoryId } from "../models/product.js";

export const listCategories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  const categories = await getAllCategories(limit, offset);
  const total = await countCategories();
  res.render("category", {
    category: categories,
    currentPage: page,
    totalPages: Math.ceil(total / limit),
  });
};

export const addCategory = async (req, res) => {
  const { name } = req.body;
  await createCategory(name);
  res.redirect("/categories");
};

export const showEditCategoryForm = async (req, res) => {
  const { id } = req.params;
  const category = await getCategoryById(id);
  res.render("updateCategory", { category });
};

export const editCategory = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await updateCategory(id, name);
  res.redirect("/categories");
};

export const removeCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await getProductsByCategoryId(id);

    if (products.length > 0) {

      await deleteProductsByCategoryId(id);
    }

    await deleteCategory(id);
    res.redirect("/categories");
  } catch (error) {
    console.error("Error deleting category:", error);
    res.status(500).send({ message: "An error occurred while deleting the category." });
  }
};

export const showAddCategoryForm = (req, res) => {
  res.render("addCategory");
};
