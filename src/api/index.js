// 使用这个模块：API同意进行管理
import request from "./ajax";

import mockRequest from './mockAjax';

// 三级联动的接口
// /api/product/getBaseCategoryList get类型 无参数

export const reqCategoryList = () => {
    return request({ url: '/product/getBaseCategoryList', method: 'get' }); // 发请求：axios发请求返回Promise对象
}

export const reqGetBannerList = () => {
    return mockRequest.get('/banner');
}

// 获取floor数据
export const reqGetFloorList = () => {
    return mockRequest.get('/floor');
}

// 获取search数据 地址api/list 请求post 参数：需要
export const reqGetSearchInfo = (params) => {
    return request({
        url: '/list',
        method: 'post',
        data: params,
    })
}