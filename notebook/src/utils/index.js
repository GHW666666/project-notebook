//项目接口统一管理
import axios from './axios';
export const get=axios.get
export const post=axios.post

export const getUserInfo=async()=>{
    console.log(axios.defaults.baseURL)
    return await get('/userInfo')
}