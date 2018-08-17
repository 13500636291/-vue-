import axios from 'axios'
const baseURL = 'http://localhost:8888/api/private/v1/'
axios.defaults.baseURL = baseURL

// 添加一个请求拦截器
axios.interceptors.request.use(function(config) {
    let token = localStorage.getItem('mytoken')
    if (token) {
        config.headers['Authorization'] = token
    }
    return config;
}, function(error) {
    return Promise.reject(error);
});


//登陆验证
export const loginPost = form => axios.post('login', form).then(res => res.data)
    //获取用户列表
export const getUserList = form => axios.get('users', form).then(res => res.data)