let sql = require("./sql");         //sql语句
let mysql = require("../mysql");    //封装的mysql
let keys = require("./keys");       //密钥
let { md5 } = require("./config");     //方法
var jsonwebtoken = require("jsonwebtoken"); //引入模块
class Obj {
    //注册接口
    register(req, res, next) {
        let user = req.body;
        if (user.username && user.password && user.email && user.phone) {   //注册信息不为空
            mysql.query(sql.register, [user.username], (result) => {
                if (result.length) {    //数据库里的username有没有重名的
                    res.send({
                        msg: "用户名已存在，请重新输入！",
                        code: 1
                    });
                } else {    //没有重名时添加数据
                    //把密码加密之后加入数据库
                    let sqlvalue = [user.username, md5(`${user.password}${keys.PWD_SALT}`), user.email, user.phone, user.nick, user.head_img];
                    mysql.query(sql.register1, sqlvalue, result => {
                        res.send({      //添加成功
                            msg: "注册成功！",
                            code: 0
                        });
                    })
                }
            })
        } else {
            res.send({
                msg: "注册的信息不能为空",
                code: -1
            });
        }
    }
    // 登录接口
    login(req, res, next) {
        let user = req.body;
        if (user.username && user.password) {   //登录信息不为空
            mysql.query(sql.login, [user.username], (result) => {
                if (result.length) {     //用户名存在
                    //密码没错(用户输入的密码通过md5加密之后 与 数据库的md5密码进行比较)
                    if (result[0].password === md5(`${user.password}${keys.PWD_SALT}`)) {
                        var token = jsonwebtoken.sign(user, keys.KEY, { expiresIn: keys.TIME });
                        res.send({
                            msg: "登陆成功！",
                            token: token,
                            code: 0
                        })
                    } else {      //密码错了
                        res.send({
                            msg: "密码错误！",
                            code: 2
                        })
                    }
                } else {    //用户名不存在
                    res.send({
                        msg: "用户名不存在！",
                        code: 1
                    })
                }
            })
        } else {      //输入的信息为空
            res.send({
                msg: "用户名或密码不能为空",
                code: -1
            })
        }
    }
    //获取用户信息
    userinfo(req, res, next) {
        let user = req.body;
        if (user.username) {
            const sql_yuju = `select username,email,phone,head_img from user where username=?`
            const sqlvalue = [user.username];
            mysql.query(sql_yuju, sqlvalue, (result) => {
                res.send({
                    msg: "查询成功！",
                    code: 0,
                    data: result
                })
            })
        }
    }
    //修改用户信息
    change_userinfo(req, res, next) {
        let user = req.body;
        if (user.username) {
            mysql.query('select * from user where username=?', [user.username], result => {
                if (result.length === 0) {
                    const sql_yuju = `update user set username=?,email=?,phone=?,head_img=? where username=?`
                    const sqlvalue = [user.username,user.email,user.phone,user.head_img,user.old_username];
                    mysql.query(sql_yuju, sqlvalue, (result) => {
                        res.send({
                            msg: "修改成功！",
                            code: 0,
                        })
                    })
                } else {
                    res.send({
                        msg: "用户名已存在！",
                        code: 1,
                    })
                }
            })

        } else {
            res.send({
                msg: "用户名不能为空",
                code: -1,
            })
        }
    }
}
module.exports = new Obj();