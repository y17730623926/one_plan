module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://192.168.1.39:3000',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':"http://192.168.1.39:3000"
                }
            },
            // '/teacher':{
            //     target:'http://192.168.1.39:3000',
            //     changeOrigin:true,
            //     pathRewrite:{
            //         '^/teacher':"http://192.168.1.39:3000"
            //     }
            // }
        }
    }
}