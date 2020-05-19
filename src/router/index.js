import Vue from 'vue' // 引入vue
import Router from 'vue-router' // 引入路由
import Login from '@/pages/login' // 引入需要用到路由的页面
import Home from '@/pages/home' // 引入需要用到路由的页面

Vue.use(Router) // vue使用路由

export const VRouter = [
    {
        path : '/login' ,
        component: Login
    },
    {
        path : '/home' ,
        component: Home
    },
    {
        path: '/',
        redirect : '/login'
    }
]

export const router = new Router({
    routes : VRouter

})

router.beforeEach((to, from, next) => {
    // to表示要去的路由地址
    // from表示来自哪个路由地址
    // next 是一个函数  next() 表示放行   next('login')表示强制跳转
    if(to.path === '/login') return next();
    //获取token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login')
    next();
  })

export default router