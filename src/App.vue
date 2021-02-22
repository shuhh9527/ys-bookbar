<template>
  <Navbar></Navbar>
  <Bar></Bar>
  <el-button type="primary">大家好</el-button>
  <router-view></router-view>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import  Navbar from './layout/navbar/index.vue'
import Bar from './layout/tab/index.vue'
export default defineComponent ({
  name: 'App',
  components:{
    Navbar,
    Bar
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  height: 100vh;
}
</style>
