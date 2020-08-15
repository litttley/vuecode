import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../components/Login";
import Home from "../components/Home";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }


]

const router = new VueRouter({
    routes
})
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
    //to:要访问的路径
    //from:从那个页面跳转
    //next:放行涵数，next()放行 next('login') 强制跳转
    if (to.path == '/login') return next();
    //获取token
    const tokenstr = window.sessionStorage.getItem('token');
    if (!tokenstr) return next('/login');
    next()

});

export default router
