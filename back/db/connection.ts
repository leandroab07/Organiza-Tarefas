import mysql from 'mysql2/promise';
import config from '../config/config';

export default mysql.createPool(config.db)