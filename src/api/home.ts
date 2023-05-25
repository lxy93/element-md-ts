import request from '@/utils/request'
import type { IHomeInfo } from '@/views/homeTab/types/home'

// 获取首页数据
export const getHomeData = (params: unknown = null)=> {
    return request<IHomeInfo,IHomeInfo>({
        url:'/api/home_data',
        params
    })
}