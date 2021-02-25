import {UserState} from '../types/user'
import { Commit } from 'vuex';

export default {
  updateUserInfo(context: { commit: Commit }, userInfo:UserState){
    context.commit('UPDATE_USERINFO',userInfo)
  }
};
