// 封装
let mysql = require("mysql");
let pool = mysql.createPool({
    host:'localhost',
	user:'root',
	password:'root',
	port:'3306',
	database:'material'
})
//传出
exports.query = function (sql,arr,callback) {
    //池
    pool.getConnection(function(err,connection){
        if(err){
            throw new Error;
            return;
        }
        connection.query(sql,arr,(error,result)=>{
            connection.release();       //释放
			if(error) throw error;          //抛出异常
			callback && callback(result);   //调用函数
        })
    })
}