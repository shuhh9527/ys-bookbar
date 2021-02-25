<template>
    <div class="form">
           <div class="zjh">大家好我是张家辉，测试一下scss</div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name:'Form2',
})
</script>

<style lang='scss' scoped>
    .form{
        width: 100%;
        height: 100px;
        background-color:chartreuse;
        .zjh{
            color:red
        }
    }


</style>