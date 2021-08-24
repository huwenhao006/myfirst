const express=require('express');
//创建路由器对象
let router=express.Router();
//添加 get /list
router.get('/list',(req,res)=>{
     res.send('商品列表');
});
//导出路由器对象
module.exports=router;
//添加组员可以用别名exports，添加对象一定要用module.exports
