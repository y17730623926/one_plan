//所有常量（包括密钥,token存在时间）
const PWD_SALT = "yukuan";      //和数据一起转码md5
const TIME = 24*60*60;          //token时间
const KEY = "YUKUAN";           //token密钥
module.exports = {
    PWD_SALT,
    TIME,
    KEY,
}