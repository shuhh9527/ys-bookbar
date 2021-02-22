<template>
  <img alt="Vue logo" style="width:20%" src="./assets/bookbar.png">
  <el-button type="primary">此处为切换组件</el-button>
  <p>=============以下展示内容=============</p>
  <router-view></router-view>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'

export default defineComponent ({
  name: 'App',
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
