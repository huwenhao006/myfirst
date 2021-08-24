const express=require('express');
//创建路由器对象
let router=express.Router();
//往路由器中挂载路由
//get   /login
router.get('/login',(req,res)=>{
        res.send('用户登录');
})
//get  /list  
router.get('/list',(req,res)=>{
        res.send('商品列表');
})

//导出路由器对象
//导出对象赋值给module.exports
module.exports=router;