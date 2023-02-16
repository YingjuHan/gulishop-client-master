// 使用这个模块：API同意进行管理
import request from "./request";

import mockRequest from './mockAjax';

// 三级联动的接口
// /api/product/getBaseCategoryList get类型 无参数

export const reqCategoryList = () => {
    return request({ url: '/product/getBaseCategoryList', method: 'get' }); // 发请求：axios发请求返回Promise对象
}

export const reqGetBannerList = () => {
    return mockRequest.get('/banner');
}