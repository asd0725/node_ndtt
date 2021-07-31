const express = require('express');
const cors = require('cors')
const app = new express();
const router_user = require('./controller/UserController2')
const router_cate = require('./controller/cateController');



app.use(cors());
app.use('/api/mini',router_user);
app.use('/api/cate',router_cate);



app.listen(3000,(req,res)=>{
  console.log('server is running at 3000');
})

