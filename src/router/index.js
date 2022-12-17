// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {show: true}
        },
        {
            path: '/search',
            component: Search,
            meta: {show: true}
        },
        {
            path: '/login',
            component: Login,
            meta: {show: false}
        },
        {
            path: '/register',
            component: Register,
            meta: {show: false}
        },

        // 重定向至Home
        {
            path: '*',
            redirect: '/home'
        }
    ]
})