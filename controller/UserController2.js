const express = require('express');  // 引入web-express模块
let router = new express.Router();   // 引入路由机制

const userDAO = require('../dao/UserDAO2')


router.get('/swiper',(req,res)=>{


      let promise = userDAO.swiper();
      promise.then((data)=>{
         res.json(
           {
               errno:0,
               data:data
           }
         )

      })


})

module.exports=router;
