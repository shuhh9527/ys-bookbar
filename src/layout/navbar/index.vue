<template>
    <div class="navbar">
        <img src="@/assets/bookbar.png" class="narbar_img" alt="logo图标">
        <div class="navbar_title"> 肥羊书吧</div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Navbar',
})
</script>

<style scoped>
    .navbar{
        width: 100%;
        height: 50px;
        background-color: lightsteelblue;
    }
    .narbar_img{
        height: 50px;
        float: left;
    }
    .navbar_title{
        font-family: cursive;
        height: 50px;
        font-size: 24px;
        line-height: 50px;
        float: left;
    }

</style>