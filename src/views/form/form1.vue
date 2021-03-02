<template>
  <div class="form">我是表单1</div>
  <!-- <el-button @click="getMock1">原Mock</el-button> -->
  <el-button @click="getMock">测试get</el-button>
  <el-button @click="getMock2">测试post</el-button>

</template>

<script lang='ts'>
// import { defineComponent, getCurrentInstance } from "vue";
import { defineComponent } from "vue";
import { userInfo, userLogin  } from '../../api/user'
export default defineComponent({
  name: "Form1",
  setup() {
    // const { ctx } = getCurrentInstance()
    // const axios = getCurrentInstance()?.appContext?.config.globalProperties?.$axios
    const obj = {
      username:'zhangsan',
      password:'123'
    }
    // const getMock1 = (() => {
    //     axios.get('/test').then((res:any)=>{
    //         console.log(res)
    //     })  
    //   })
    const getMock = (() => {
        // axios.get('/user/info').then((res:any)=>{
        //     console.log(res)
        // })  
        userInfo().then((res:any)=>{   
          console.log(res)
        }) 
      })
      const getMock2 = (() => {
        // axios.post('/user/login',obj).then((res:any)=>{
        //     console.log(res)
        // })  
        userLogin(obj).then((res:any)=>{
            console.log(res)
        })          
      })
  return {
    getMock,
    // getMock1,
    getMock2
  }
  },
});
</script>

<style scoped>
.form {
  width: 100%;
  height: 100px;
  background-color: burlywood;
}
</style>