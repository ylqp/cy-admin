import axios from "axios"

const request = axios.create({
  baseURL: "/",
  timeout: 10000,
})

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    if (config.requestHandler) {
      config = config.requestHandler(config)
    }
    console.log(config.headers)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做些什么
    return response && response.data
  },
  (error) => {
    // 这块还没有写好
    console.log(error)
  }
)

// 请求函数生成器
export function generateRequest(config) {
  return (url, params) =>
    new Promise((resolve, reject) => {
      request({
        url,
        data: params,
        ...config,
      })
        .then((value) => {
          // 接口返回数据统一处理
          resolve(value)
        })
        .catch((err) => {
          reject(err)
        })
    })
}

// get请求
export const get = generateRequest({
  method: "GET",
})
// post请求
export const post = generateRequest({
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
})
// post请求
export const postJson = generateRequest({
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
})

export const getExcel = generateRequest({
  method: "GET",
  headers: { Warning: "200", "Content-Type": "application/json;charset=UTF-8" },
  responseType: "blob",
  responseHandler: (data) => {
    return data
  },
})

// dq
export const getdq = generateRequest({
  method: "GET",
  requestHandler: (config) => {
    Object.assign(config.headers, {
      Authorization: `Bearer ${sessionStorage.getItem("token") || ""}`,
    })
    return config
  },
})
