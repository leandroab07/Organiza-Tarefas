import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: 'localhost',
  user: 'leandro',
  password: '020853',
  database: 'tasks'
})