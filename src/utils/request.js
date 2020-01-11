import axios from 'axios';

//开始axios的配置 

var server = axios.create({
      
    baseURL:"/",
    timeout:600000, //6秒
    changeOrigin: true,
    headers:{ //所有的请求都会携带这个请求头
        
    },

})


export default server