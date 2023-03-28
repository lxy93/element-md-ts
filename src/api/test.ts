import request from "@/utils/request";

export const getTestData = () =>{
    return request({
        url:'/api/test'
    })
}