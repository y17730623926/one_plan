var crypto = require('crypto');
//所有方法
module.exports = {
    md5(data) {     //MD5转码数据
        return crypto.createHash('md5').update(String(data)).digest('hex');
    },
}