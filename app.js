const  express=require('express');
//引用用户路由器
const userRouter=require('./routes/user.js');
//引入商品路由器
const productRouter=require('./routes/product.js')
//引入首页的路由器
const indexRouter=require('./routes/index.js')

//创建服务器
let app=express();
app.listen(8080);
app.use(express.static('public'));


 //应用路由器，给路由器下的每个路由添加前缀(重点)
// /login      /user/login                
app.use('/user',userRouter);
// /list     /product/list
 app.use('/product',productRouter);
app.use('/',indexRouter);//首页不属于任何模块所以不用加前缀
