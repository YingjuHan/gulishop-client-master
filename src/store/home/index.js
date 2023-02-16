import { reqCategoryList, reqGetBannerList } from "@/api";


// state: 存储数据
const state = {
    categoryList: [],
    bannerList: [],
};

// mutations: 修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    }
};

// actions: 处理action, 可以书写自己的业务逻辑，也可以处理异步
const actions = {
    // 通过api接口获取服务器数据
    async categoryList({commit}) {
        let res = await reqCategoryList();
        
        if (res.code === 200) {
            commit('CATEGORYLIST', res.data)
        }
    },

    async getBannerList({commit}) {
        let res = await reqGetBannerList();
        console.log(res);
        if (res.code == 200) {
            commit('BANNERLIST', res.data);
        }
    }
};

// getters: 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};



export default {
    state,
    mutations,
    actions,
    getters
}