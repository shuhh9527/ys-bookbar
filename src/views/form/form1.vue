<template>
  <div class="form">我是表单1</div>
</template>

<script lang='ts'>
import { defineComponent, getCurrentInstance } from "vue";
export default defineComponent({
  name: "Form1",
  setup() {
    console.log(getCurrentInstance())
    
    // const { ctx } = getCurrentInstance()
    const axios = getCurrentInstance()?.appContext?.config.globalProperties?.$axios
    axios.get('/test').then((res:any)=>{
        console.log(res)
    })
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