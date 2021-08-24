
/* 
//添加中间件，拦截对URL为/list的请求   
app.use('/list',function(req,res,next){//不加第一个参数，表示拦截多有请求
      console.log('拦截到了对list的请求');//服务端显示
	  console.log(req.query);
   //如果用户名不是root，则响应无权访问，否则执行下一个中间件或者路由
   if(req.query.uname!=='root'){
        res.send('没有权限');
   }else{
       next();//下一个中间件或路由
   }
})
//获取后台数据的路由
//get /list
app.get('/list',(req,res)=>{
    res.send('这是后台的商品数据');
	
});
const express=require('express');
let app=express();
app.listen(8080);

app.use('/shopping',(req,res,next)=>{
   console.log(req.query);
   req.query.price*=0.9;
   next();
})
//创建路由
app.get('/shopping',(req,res)=>{
     res.send('商品价格为'+ req.query.price);
})

const http=require('http');
http.get('http://www.baidu.com',(res)=>{
    console.log(res.statusCode);
	res.on('data',(chunk)=>{
	   console.log(chunk.toString());
	})
})


const http=require('http');
http.get('http://www.thinkbon.com',(res
	)=>{
  console.log(res.statusCode);
  res.on('data',(chunk)=>{
    console.log(chunk.toString());
  })
})

//创建服务器
const http=require('http');
let app=http.createServer();
app.listen(8080);

app.on('request',(req,res)=>{
   consoel.log('有请求进来');
   res.write('this is my first web');
   res.writeHeader(200,{
       'Content-Type':'text/html;charset=utf-8';
   })
	  res.writeHead(302,{
      Location:'http://www.baidu.com';
   })
   res.end();
})

//创建web服务器
const http=require('http');
const fs=require('fs');
const zlib=require('zlib');
let app=http.createServer();
app.listen(8080);
app.on('request',(req,res)=>{
       let url=req.url;
	   if(url==='/index'){
	       res.writeHead(200,{
		   'Content-Type':'text/html;charset=utf-8';
		   });
		   res.write('<h2>欢迎来到了我的主页</h2>')
	       res.end();
	   }else if(url==='/list'){
 
	     let file=fs.readFileSync('list.html');
		 res.write(file);
		 res.end();
	
         res.writeHead{200,{
		    'Content-Encoding':'gzip';
		 }
		 let gzip=zlib.createGzip();
		 fs.creatReadStream('list.html').pipe(gzip).pipe(res);

	   }else if(url='/'){
	      res.writeHead(302,{
		  Location:'/index';
		    res.end();	   
		  })else{
		    res.writeHead(404);
		res.write('Not Found');
		  res.end();
		  }
  	   }
})
 	 */
const fs=require('fs');
let  a=[
{'uname':'小宇','age':17,'sex':'男'},
{'uname':'小哈','age':16,'sex':'女'},
{'uname':'小饭','age':16,'sex':'男'}
]
for (var i=0;i<a.length;i++ )
{
    str=a[i].uname+' '+a[i].age+' '+a[i].sex+'\n';	
fs.appendFileSync('hahha.txt',str);
}