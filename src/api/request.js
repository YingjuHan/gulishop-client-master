import axios from 'axios';
// 对axios二次封装

// 1、利用axios对象的方法create,创建一个axios实例
// 2、request就是axios（配置后的）
const request = axios.create({
  // 配置对象
  baseURL: '/api', // 基础路径，发请求时路径中会出现api
  timeout: 5000, // 代表请求超时时间5s
});

// 请求拦截器：再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config) => {
  // config：配置对象，对象中有一个属性是header请求头
  return config;
});

// 响应拦截器：
request.interceptors.response.use(
  (res) => {
    // 成功的回调函数：服务器响应数据回来以后，响应拦截器可以监测到，可以做一些事情
    return res.data;
  },
  (error) => {
    // 失败的回调函数：打印错误信息，终止Promise链
    console.error(error);
    return Promise.reject(new Error('faile'));
  }
);


export default request;