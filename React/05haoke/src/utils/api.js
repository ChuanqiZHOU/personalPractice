import axios from "axios";
import { removeToken } from ".";
import { getToken } from "./auth";
import { BASE_URL } from "./url";

const API = axios.create({
    baseURL: BASE_URL
})
//添加请求拦截器

API.interceptors.request.use(config => {
    //console.log(config, config.url)
    const { url } = config;
    if (url.startsWith('/user')&& !url.startsWith('/user/login')&& !url.startsWith('/user/registered')) {
        config.headers.Authorization= getToken()
    }
    return config
})

//添加相应拦截器
API.interceptors.response.use(response => {
    //console.log(response);
    const { status } = response.data;
    if (status === 400) {
        // 说明Token失效
        removeToken()
    }
    return response
})
export {API}