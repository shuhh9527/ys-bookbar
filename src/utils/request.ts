import axios from 'axios'

// function getToken(){ // 获取token
//     return true
// }

const request = axios.create({
    baseURL:'',
    withCredentials:false, // 跨域请求时，是否携带验证（token等）
    timeout:5000,
})


request.interceptors.request.use( 
    config => {
    // axios的request拦截器
     
    // 验证token啦、验证store/token、增加header、修改请求url等等都可以在此处修改

    // if (getToken()){
        // config.headers['tokenName'] = getToken   // 设置请求头
    // }

    // if (store.getters.token){
    //     ...
    // }
    return config
},
    error => {
        console.log(error)
    }
)

request.interceptors.response.use( response => {
    const res = response.data
    if(res.code !== 200){ // 返回数据失败了
        // 可在这里弹框之类的进行提示
        return Promise.reject('error')
    } else {
        return res
    }
})

export default request