import {createRouter,createWebHashHistory} from 'vue-router'


// 定义路由
// 每个路由都需要映射到一个组件。
const routes = [
    { path: '/', component: ()=> import('@/layout/index.vue') },
    { path: '/form1', component: () => import('@/views/form/form1.vue') },
    { path: '/form2', component: () => import('@/views/form/form2.vue') },
    { path: '/vuex', component: () => import('@/views/form/store.vue') },
]

// 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router