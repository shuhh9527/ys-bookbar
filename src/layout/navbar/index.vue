<!-- navbar -->
<template>
  <div class="narbar">
  <img alt="Vue logo" class="logo" src="@/assets/bookbar.png">
  <div class="title">肥羊书吧</div>
  </div>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
  name:'Navbar',
})
</script>
<style  scoped>
  .narbar{
    height: 50px;
    width: 100%;
    background-color: cadetblue;
  }
  .logo{
    float: left;
    height:50px
  }
  .title{
    float: left;
    line-height: 50px;
    font-size: 24px;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
</style>
