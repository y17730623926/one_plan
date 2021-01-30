var express = require('express');
var router = express.Router();
//上传用户图像
// var multer  = require('multer')          
// var upload = multer({ dest: 'uploads/' })
var { upload } = require('../config/methods')

// console.log(upload)
//引入接口方法
let cbfile = require("../cbfile/cbfile.js");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// 注册
router.post('/register', cbfile.register);
// // 登录
router.post('/login', cbfile.login);
// //查看
router.post('/userinfo', cbfile.userinfo);
// 用户上传头像
router.post('/upload',upload.single('head_img'),async(req,res,next) => {
  console.log(req.file)
  let imgPath = req.file.path.split('public')[1];
  imgPath = imgPath.replace(/\\/g,"/");
  console.log(imgPath);
  let imgUrl = 'http://localhost:3000'+imgPath
  res.send({code:0,msg:'上传成功',data:imgUrl})
 })
// //修改
router.post('/change_userinfo', cbfile.change_userinfo);


module.exports = router;