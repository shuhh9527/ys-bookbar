const data = '你成功了' // 此处数据可通过Mock生成
const data2 = '登录成功' // 此处数据可通过Mock生成

export default [
    {
        url:'/user/info',
        type:'get',
        response: config => {
        // 此处通常进行一些逻辑判断之类的东西，最后return需要返回的值
        if(config){
            console.log('1')
        }
            return {
                code:200,
                title:'获取用户信息成功',
                data:data,
                success:true,
                detail:'获取用户信息成功的详情'
            }
        }
    },
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            // 此处通常进行一些逻辑判断之类的东西，最后return需要返回的值
            if (config) {
                console.log('1')
                console.log(config)
            }            
            return {
                code: 200,
                title: '登录成功',
                data: data2,
                success: true,
                detail: '登录成功的详情'
            }
        }
    }
]