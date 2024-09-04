import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from "axios"

const request: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000
})

request.interceptors.request.use((config: AxiosRequestConfig): any => {
    //函数体
    return config
}, (error: any): Promise<any> => {
    //函数体
    return Promise.reject(error)
})


request.interceptors.response.use((response: AxiosResponse): any => {
    //函数体
    return response.data
}, (error: any): Promise<any> => {
    //函数体
    return Promise.reject(error)
})

export default request