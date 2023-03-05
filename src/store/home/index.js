import { reqCategoryList, reqGetFloorList, reqGetBannerList } from '@/api';

// state: 存储数据
const state = {
  categoryList: [],
  bannerList: [],
  floorList: [],
};

// mutations: 修改state的唯一手段
const mutations = {
  CETCATGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};

// actions: 处理action, 可以书写自己的业务逻辑，也可以处理异步
const actions = {
  // 通过api接口获取服务器数据
  async categoryList({ commit }) {
    let res = await reqCategoryList();
    if (res.code === 200) {
      commit('CETCATGORYLIST', res.data);
    }
  },

  async getBannerList({ commit }) {
    let res = await reqGetBannerList();
    if (res.code === 200) {
      commit('GETBANNERLIST', res.data);
    }
  },

  async getFloorList({ commit }) {
    let res = await reqGetFloorList();
    if (res.code === 200) {
      commit('GETFLOORLIST', res.data);
    }
  },
};

// getters: 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
