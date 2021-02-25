<template>
  <div>{{count}}</div>
  <el-button @click="abc">点我改变user</el-button>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const abc = (() => {
      store.dispatch('updateUserInfo',{
        user:'lj',
        password:'1234'
      })
    })
    const count =  computed(() => store.state.userInfo.user)
    return {
      abc,
      count
      // evenOrOdd: computed(() => store.getters.evenOrOdd),
      // increment: () => store.dispatch('increment'),
      // decrement: () => store.dispatch('decrement'),
      // incrementIfOdd: () => store.dispatch('incrementIfOdd'),
      // incrementAsync: () => store.dispatch('incrementAsync')
    }
  }
}
</script>