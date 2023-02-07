// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';

// 使用插件
Vue.use(VueRouter);

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

// 引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search/index.vue';
import Login from '@/pages/Login';
import Register from '@/pages/Register';

// 配置路由
export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { show: true },
    },
    {
      path: '/search/:keyword?',
      name: 'Search',
      component: Search,
      meta: { show: true },
      props: ($route) => {
        return {
          keyword: $route.params.keyword,
          k: $route.params.k,
        }
      }
    },
    {
      path: '/login',
      component: Login,
      meta: { show: false },
    },
    {
      path: '/register',
      component: Register,
      meta: { show: false },
    },

    // 重定向至Home
    {
      path: '/',
      redirect: '/home',
    },
  ],
});
