//创建MySQL连接
const mysql=require('mysql');
var pool=mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '123456',
  database: 'hs',
  connectionLimit: 15
});
//将来要被其它的模块使用
module.exports=pool;
