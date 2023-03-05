import Vue from 'vue';
import App from './App.vue';

import TypeNav from '@/components/TypeNav'

// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);
// 引入路由
import router from '@/router'

// 引入vuex仓库
import store from '@/store'

import '@/mock/mockServe';
Vue.config.productionTip = false;

// 引入Swiper样式
import 'swiper/css/swiper.css'

new Vue({
  render: (h) => h(App),
  router: router, // 注册路由
  store: store, // 注册仓库，组件实例会多一个叫做$store的属性
}).$mount('#app');
