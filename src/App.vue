<template>
  <Navbar></Navbar>
  <Menu></Menu>
  <router-view></router-view>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
import Navbar from '@/layout/navbar/index.vue'
import Menu from '@/layout/menu/index.vue'

export default defineComponent ({
  name: 'App',
  components:{
    Navbar,
    Menu
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
