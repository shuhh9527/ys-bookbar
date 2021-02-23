<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/form1">表单1</el-menu-item>
        <el-menu-item index="form2">表单2</el-menu-item>
    </el-menu>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
    name:'Menu',
    setup(){
        const router = useRouter()
        const routes = useRoute()

        const activeIndex = ref(routes.path)
        router.push(activeIndex.value)

        const handleSelect = ((key:string) => {
        router.push(key)
        })
        return {
            activeIndex,
            handleSelect
            }
    }
})
</script>

<style>

</style>