<template>
<p>store.state.user.userName拿出来的</p>
  <div>{{stateData}}</div>
<p>mapGetters拿出来的</p>
  <div>{{mapData}}</div>

  <el-button @click="abc">点我改变user</el-button>
</template>

<script>
import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const abc = (() => {
      store.dispatch('user/updateUserName','我改名字了')
    })
    const stateData =  computed(() => store.state.user.userName)
// const { mapData } = computed(...mapGetters(['userName']))
    // mapData

    return {
      abc,
      stateData,
      mapData
    }
  }
}
</script>