import pool from "../db.js";

export const getAllProducts = async (limit, offset) => {
  const [rows] = await pool.query(`
    SELECT 
      Product.id AS ProductId,
      Product.name AS ProductName,
      Category.id AS CategoryId,
      Category.name AS CategoryName
    FROM Product
    JOIN Category ON Product.categoryId = Category.id
    LIMIT ? OFFSET ?
  `, [limit, offset]);
  return rows;
};

export const countProducts = async () => {
  const [[{ count }]] = await pool.query('SELECT COUNT(*) AS count FROM Product');
  return count;
};

export const getProductById = async (id) => {
  const [rows] = await pool.query(`
    SELECT 
      Product.id AS ProductId,
      Product.name AS ProductName,
      Category.id AS CategoryId,
      Category.name AS CategoryName
    FROM Product
    JOIN Category ON Product.categoryId = Category.id
    WHERE Product.id = ?
  `, [id]);
  return rows[0];
};

export const createProduct = async (name, categoryId) => {
  await pool.query('INSERT INTO Product (name, categoryId) VALUES (?, ?)', [name, categoryId]);
};

export const updateProduct = async (id, name, categoryId) => {
  await pool.query('UPDATE Product SET name = ?, categoryId = ? WHERE id = ?', [name, categoryId, id]);
};

export const deleteProduct = async (id) => {
  await pool.query('DELETE FROM Product WHERE id = ?', [id]);
};
