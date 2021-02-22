<!-- tabs -->
<template>
 <el-tabs v-model="activeName">
      <el-tab-pane
      v-for="(item, index) in list"
      :key="index"
      :label="item.label"
      :name="item.name"
      @click="handleClick(item.path)"
    >
    {{item.label}}
  </el-tab-pane>
  </el-tabs>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name:'Bar',
data() {
  return {
    activeName:'first',
    list:[
      {
        label:'首页',
        path:'/',
        name:'first'
      },
            {
        label:'增加书籍',
        path:'/btn1',
        name:'second'
      },
      {
        label:'增加订单',
        path:'/form',
        name:'third'

      }
    ]
  }
},
methods:{
  handleClick(path){
    console.log(path)
  }
}
})
</script>
<style scoped>

</style>