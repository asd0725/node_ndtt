const mysql   = require('mysql');
const dbUtil = require('../util/DBUtil')

function cateData(user){
    let sql="select * from cateData"

    console.log("sql:",sql);
    return dbUtil.query(sql)
}

module.exports={
    cateData:cateData
}