import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',      
  password: '#yash141', 
  database: 'inventory_management',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// const pool = mysql.createPool({
//   host: 'sql12.freesqldatabase.com',
//   user: 'sql12753331',      
//   password: 'g31tpNhd4n', 
//   database: 'sql12753331',
//   port: 3306,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

export default pool;
