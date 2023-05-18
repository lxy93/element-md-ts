import request from '@/utils/request'
import type { IsearchParam } from './type/index'

// 获取搜索数据
export const getSearchData = (params:IsearchParam)=> {
    return request({
        url:'/api/home_search',
        params
    })
}