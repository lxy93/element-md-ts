import axios, { type AxiosResponse } from "axios";
import { Toast } from "vant";

const server = axios.create({
    baseURL:'/api',
    timeout:5000
})

server.interceptors.request.use((config) => {
    // console.log(config,'kkkk')
    // config.headers.token = wx_token
    return config;
  }, (error) => {
    return Promise.reject(error);
  });


server.interceptors.response.use((response:AxiosResponse<any>) => {
    console.log(response.data,'oooo')
    let {status,data} = response
    if(status !== 200){
        Toast({
            message:response.data.msg,
            duration:3000,
            forbidClick:true,
            onClose:()=>{
            //   window.App.toAppLogin();
            }
        })
        return Promise.reject(data) 
    }
    return Promise.resolve(data);
  },  (error) => {
    return Promise.reject(error);
  });


export default server
