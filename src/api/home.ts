import request from '@/utils/request'
import type { IHomeData } from '@/views/homeTab/types/home'

// 获取首页数据
export const getHomeData = (params: unknown = null)=> {
    return request<IHomeData,IHomeData>({
        url:'/api/home_data',
        params
    })
}