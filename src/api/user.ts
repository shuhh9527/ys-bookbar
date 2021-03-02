import request from '../utils/request'

export function userInfo(){
   return request({
        url:'/user/info',
        method: 'get'
    })
}

export function userLogin(data:Object) {
    return  request({
        url: '/user/login',
        method: 'post',
        data
    })
}