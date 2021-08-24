const mysql=require('mysql');
let pool=mysql.createPool({
        host:'127.0.0.1',
		port:'33060',
		user:'root',
		passwd:'',
		database:'tedu',
		connection-limit:15
});
module.exports=router;
