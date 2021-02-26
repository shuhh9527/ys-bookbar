import { createStore } from 'vuex';
// import state from './state';
// import mutations from './mutations';
// import actions from './actions';
import user from './modules/user'
import getters from './getters'


export default createStore({
  modules:{
    user
  },
  getters
  // state,
  // mutations,
  // actions,
});