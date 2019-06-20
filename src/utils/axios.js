import axios from 'axios'
import { message } from 'antd'

var hide = null
//创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  baseURL: 'api',
  timeout: 10000, // 请求超时时间
  withCredentials: true // 选项表明了是否是跨域请求
})
service.interceptors.request.use(config => {
  hide = message.loading('加载中', 0)
  return config;
}, err => {
  hide && setTimeout(hide, 100)
  return Promise.reject(err)
})
//拦截响应
service.interceptors.response.use(config => {
  hide && setTimeout(hide, 100)                   
  return config;
}, err => {
  hide && setTimeout(hide, 100)
  return Promise.reject(err)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    /**
    * code为非000000是抛错 可结合自己业务进行修改
    */
    const res = response.data
    // return response.data
    if (res.code !== 200) {
      message.info(res.code, 2);
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service