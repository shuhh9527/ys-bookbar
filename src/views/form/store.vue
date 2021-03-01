<template>
<p>store.state.user.userName拿出来的初始值：  {{stateData}}</p>
<p>mapGetters拿出来的 ： {{name}}</p>

  <el-button @click="dispatchFn">用dispatch改</el-button>
  <el-button @click="commitFn">用commit改</el-button>

  <el-button @click="update('mapMutations ')">mapMutations</el-button>
  <el-button @click="actions(' mapActions')">mapActions</el-button>

  <p>这是mapState获取的name2: {{name2}}</p>
  <p>这是mapGetters获取的username: {{userName}}</p>

</template>

<script>
import { computed } from 'vue'
// import { mapGetters, useStore } from 'vuex'
import { useStore, mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  setup () {
    const store = useStore()
    // diapatch 和 commit 操作
    const dispatchFn = () => store.dispatch('user/updateUserName','我改成dispatch名字了')
    const commitFn = () => store.commit('user/UPDATE_USERNAME','我改成commit名字了')

  // 直接获取state和通过getter 获取
    const name =  computed(() => store.getters.userName)
    const stateData =  computed(() => store.state.user.userName)

    return {
      stateData,
      name,
      dispatchFn,
      commitFn,
    }
  },
  computed:{
    ...mapState({
      name2: state => state.user.userName
    }),
    ...mapGetters([
      'userName'
    ])
  },
  methods: {
    ...mapMutations({
      update: 'user/UPDATE_USERNAME'
    }),
    ...mapActions({
      actions: 'user/updateUserName'
    })  
  }
}
</script>