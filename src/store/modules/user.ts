import { Commit } from 'vuex';
import { MutationTree } from 'vuex'

export interface userInfo {
    userName:String,
    age:Number,
    sex:String,
    password:String,
    avatar:String // 头像
}

// state
const state:userInfo = {
    userName: '张三',
    age: 18,
    sex: '男',
    password: '1234',
    avatar:'@/assets/img'
}

// mutations
const mutations: MutationTree<any> = {
    UPDATE_USERNAME(state: userInfo, name:String):void{
        state.userName = name
    }
}

// acions
const actions:any = {
    updateUserName(context:{commit: Commit },name:String):void{
        console.log(name)
        context.commit('UPDATE_USERNAME', name)
    }
}
// const getters:any = {
//     userName: (state: userInfo) => state.userName
// }
const namespaced:boolean = true
export default {
    namespaced,
    state,
    mutations,
    actions,
    // getters
}

