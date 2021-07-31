/**
 * cnpm install mysql --save
* */
var mysql = require('mysql');
let connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'asd0123',
  database: 'mini_progrom'
})


const promise_query = function(sql) {
  return new Promise(function(resolve, reject) {
    connection.getConnection((err,connection)=>{
      connection.query(sql, function(error, results, fields) {
        if (error){
          console.log('err:'+error);
        }
        resolve(results);
        connection.release();
      })
    })
  })
}
module.exports = {
     query :promise_query
}

