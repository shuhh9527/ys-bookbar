<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/form1">表单1</el-menu-item>
        <el-menu-item index="form2">表单2</el-menu-item>
    </el-menu>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Menu',
    data(){
        return {
            activeIndex:'/'
        }
    },
    methods: {
      handleSelect(key) {
        this.$router.push(key)
      }
    }
})
</script>

<style>

</style>