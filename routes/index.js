//首页
const express=require('express');
let router=express.Router();
//添加首页的路由
router.get('/index',(req,res)=>{
   res.send('这是首页的接口，会提供首页的所有数据');
})
module.exports=router;