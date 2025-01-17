import pool from "../db.js";


export const getAllCategoriesWithoutPagination = async () => {
  const [rows] = await pool.query('SELECT * FROM Category');
  return rows;
};

export const getAllCategories = async (limit, offset) => {
  const [rows] = await pool.query('SELECT * FROM Category LIMIT ? OFFSET ?', [limit, offset]);
  return rows;
};

export const countCategories = async () => {
  const [[{ count }]] = await pool.query('SELECT COUNT(*) AS count FROM Category');
  return count;
};

export const getCategoryById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM Category WHERE id = ?', [id]);
  return rows[0];
};

export const createCategory = async (name) => {
  await pool.query('INSERT INTO Category (name) VALUES (?)', [name]);
};

export const updateCategory = async (id, name) => {
  await pool.query('UPDATE Category SET name = ? WHERE id = ?', [name, id]);
};

export const deleteCategory = async (id) => {
  await pool.query('DELETE FROM Category WHERE id = ?', [id]);
};
