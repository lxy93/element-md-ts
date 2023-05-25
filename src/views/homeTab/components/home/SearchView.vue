<template>
    <div class="container">
        <OpSearch 
            v-model:modelVal="searchVal" 
            shape="round" 
            showAction 
            @search="onSearch" 
            @cancel="emits('cancel')" 
        />
        <div v-if="!searchVal" class="pl20 pr20">
            <p class="f28 color-666">历史搜索</p>
            
                <div class="flex-row items-center pb20 flex-wrap">
                    <TransitionGroup name="list">
                        <div v-for="tagItem in historyTags" :key="tagItem" @click="tagClick(tagItem)" class="tag f24 br20 mb20">{{ tagItem }}</div>
                        <!-- <van-icon @click="toggleHistoryTags" :name="isHistoryTagsShow ? 'arrow-down' : 'arrow-up'" class="block pl20 mb20" /> -->
                        <van-icon v-if="isHistoryTagsShow" @click="toggleHistoryTags" name="arrow-down" class="block pl20 mb20" />
                        <van-icon v-else @click="toggleHistoryTags" name="arrow-up" class="block pl20 mb20" />
                    </TransitionGroup>
                </div>
            
            
        </div>
        <template v-else>
            <p v-if="searchStatus === DOING" class="tc">~正在搜索中~</p>
            <div v-for="v in searchResultList" :key="v.label" class="flex-row items-center f24 pl30 pr30">
                <van-icon name="search" class="color-666 f28" />
                <p class="color-333 pl10" style="flex:1">{{ v.label }}</p>
                <p class="color-999">约{{v.resultCount}}个结果</p>
            </div>
            <p v-if="!searchResultList?.length && searchStatus === DONE" class="tc">
                ~暂无结果~
            </p>
        </template>
        
    </div>
</template>

<script lang='ts' setup>
import { ref, computed } from 'vue'
import { OpSearch } from '@/components/index'
import { getSearchData } from '@/api/search'
import type { ISearchResult } from '../../types/index'
import { useToggle } from '@/hooks/useToggle'
import { useDebounce } from '@/hooks/useDebounce'
import { watch } from 'vue'
interface IEmits{
    (e:'cancel'):void
}
const emits = defineEmits<IEmits>()
const searchVal = ref('') //搜索关键字
const [INIT,DONE,DOING] = [-1,0,1]
const searchStatus = ref(INIT) //搜索状态
const HISTORY_TAGS = [
    '煲金珠',
    '书亦烧仙草',
    '煲珠公',
    '奶茶',
    '华莱士',
    '沪上阿姨',
    '一点点',
    '尊宝披萨',
    '茶理',
    '蜜雪'
]
let [isHistoryTagsShow,toggleHistoryTags] = useToggle(false)
let historyTags = computed(()=> isHistoryTagsShow.value ? HISTORY_TAGS : HISTORY_TAGS.slice(0,5)) //历史标签
let searchResultList = ref([] as ISearchResult[]) //搜索结果列表
/**
 * method 搜索
 * @param v 关键字
 */
const onSearch = async (v?:number | string)=> {
    try{
        searchStatus.value = DOING
        const {data:{list}} = await getSearchData({searchKey:v as string})
        searchResultList.value = list
    }finally{
        searchStatus.value = DONE
    }
}
/**
 * @method tag点击
 */
const tagClick = (v:string)=> {
    searchVal.value = v
    onSearch(v)
}
/**
 * @watch 动态监听且防止抖动 搜索值变化
 */
// watch(
//     searchVal, 
//     useDebounce((newVal)=> {
//         if(!newVal){
//             searchResultList.value = []
//             return
//         }
//         onSearch(newVal as string)
//     },1000)
// )

let debounceSearchVal = useDebounce(searchVal,1000)
watch(debounceSearchVal,(nv)=>{
    if(!nv){
        searchResultList.value = []
        return
    }
    onSearch(nv as string)
})

</script>

<style lang='less' scoped>
.container{
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    z-index: 999;
    background-color: #fff;
    .tag{
        background: rgba(242, 242, 242, .8);
        padding: 4px 16px;
        margin-left: 20px;
    }
    .list-enter-active,
    .list-leave-active{
        transition: all 1s ease;
    }
    .list-enter-from,
    .list-leave-to{
        opacity: 0.3;
        transform: translateY(30px);
    }
}
</style>