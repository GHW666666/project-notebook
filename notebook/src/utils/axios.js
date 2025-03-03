import axios from "axios";
import { Toast } from "zarm";

// 设置axios的请求基地址

axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true;//跨域请求时是否需要cookie
//约定 让后端知道这是异步请求
axios.defaults.headers['X-Request-With']='XMLHttpRequest'
//jwt认证头信息 用于用户授权
axios.defaults.headers['Authorization']=`${localStorage.getItem('token')||''}`
axios.defaults.headers.post['Content-Type']='application/json'

axios.interceptors.response.use( res =>{
    // console.log('请求拦截器',res.data)
    if(typeof res.data!=='object'){
        Toast.show('服务器异常，请稍后再试');
        // 
        return Promise.reject(res);
    }
    if(res.data.code!==200){
        if(res.data.msg)Toast.show(res.data.msg);
        if(res.data.code===401){
            window.location.href='/login';
        }
        return Promise.reject(res);
    }
    return res.data;
});


export  default axios;

