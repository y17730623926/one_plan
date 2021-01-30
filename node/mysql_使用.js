let mysql = require("./mysql");     //引入mysql
let addsql = "insert into user(username,password,email,phone,nick) values(?,?,?,?,?)";
let addvalue = ["方生之","123456","123456789","123456@qq.com","132456"];
mysql.query(addsql,addvalue,(result)=>{
    console.log(result);
})
// mysql.query("select * from user",[],data=>console.log(data))
