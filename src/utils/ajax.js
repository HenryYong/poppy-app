/**
 * 封装ajax
 * @author Henry Yang
 */

import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
    validateStatus: status => {
        if (status > 400) {
            console.error(`HTTP 请求出错，错误码：${status}`)
        }

        return status >= 200 && status <= 505
    },
    withCredentials: true
})

instance.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
    if (!response.data) {
        console.error(`接口异常，HTTP状态码：${response.status}`)
        response.data = {
            code: response.status,
            message: '后端接口返回为空'
        }
    } else if (response.status === 403) {
        // 未登录
    } else if (response.status >= 300) {
        console.error(`HTTP 请求出错，状态码：${response.status}`)
        response.data = {
            code: response.status,
            message: response.statusText
        }
    }

    if (response.data.code !== 0) {
        return Promise.reject(response)
    }

    return response.data
}, err => {
    return Promise.reject(err)
})

Vue.prototype.$http = instance

export default instance
