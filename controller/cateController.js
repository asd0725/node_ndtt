const express = require('express');  // 引入web-express模块
let router = new express.Router();   // 引入路由机制

const cateDAO=require('../dao/cateDAO')

router.get('/cate',(req,res)=>{
    let promise = cateDAO.cateData()

    promise.then((data)=>{
        res.json({
            errno:0,
            data:data
        })
    })
})


module.exports=router;