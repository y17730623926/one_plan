//所有sql语句
module.exports = {
    // 注册
    register:`select * from user where username=?`,     //注册之前查询用户名是否存在
    register1:"insert into user(username,password,email,phone,head_img) values(?,?,?,?,?)", //注册时往数据库添加数据
    // 登录
    login:"select * from user where username=?",        //登录时按用户名查找是否存在
    has:"select id,username,email,phone,nick from user where username=?",       //查看   条件username
    // 修改
    change1:"select username,email,phone,nick from user where id=?",     //修改前查询这条数据

    change2:"select id,username,email,phone,nick from user",    //修改前查询所有数据

    change3:"update user set username=?,email=?,phone=?,nick=? where id=?",      //修改当前id的这条数据
}   