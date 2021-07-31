const mysql   = require('mysql');
const dbUtil = require('../util/DBUtil')


function swiper(user) {
    let sql="select * from swiperdata" ;
    
    console.log('sql:%s',sql);

    return   dbUtil.query(sql);
}

module.exports = {
    swiper:swiper
}
