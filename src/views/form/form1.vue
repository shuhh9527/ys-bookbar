<template>
  <div class="form">我是表单1</div>
  <el-button @click="getMock">模拟请求mock</el-button>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  name: "Form1",
  setup() {
    console.log(getCurrentInstance())
    
    // const { ctx } = getCurrentInstance()
    const axios = getCurrentInstance()?.appContext?.config.globalProperties?.$axios
    const getMock = (() => {
        axios.get('/test').then((res:any)=>{
            console.log(res)
        })      
      })
  return {
    getMock
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