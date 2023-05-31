<template>
    <div>
        <Transition name="fade">
            <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView" />
        </Transition>
        <Top :recomments="recomments" @searchClick="toggleSearchView"/>
        <template v-if="homeData">
        <!-- <OpLoading :loading="pedding" type="loading"></OpLoading> -->
            <Transformer :data="homeData.transformer" />
            <ScrollBar :data="homeData.scrollBarInfoList" />
        </template>
        
    </div>
</template>

<script lang='ts' setup>
import { Top, SearchView, ScrollBar, Transformer } from './components/home/index'
import { OpLoading } from '@/components'
import { useToggle } from '@/hooks/useToggle'
import { useAsync } from '@/hooks/useAsync'
import { getHomeData } from '@/api/home'
import { onMounted, ref } from 'vue'
import type { IHomeData, IScrollBarInfo } from './types'
const recomments = [
    {
        value:1,
        label:'粥'
    },
    {
        value:2,
        label:'黄米鸡'
    },
    {
        value:3,
        label:'蛋糕'
    },
    {
        value:4,
        label:'KFC'
    },
]
const [isSearchViewShow,toggleSearchView] = useToggle(false)
// const { data, pedding } = useAsync(getHomeData,{} as IHomeData)

let homeData = ref()
const getHomeDataFun = async()=> {
    const { data } = await getHomeData()
    homeData.value = data
}
onMounted(()=> {
    getHomeDataFun()
})
</script>

<style lang='less' scoped>
.fade-enter-active,.fade-leave-active{
    transition: opacity .5s ease;
}
.fade-enter-from,.fade-leave-to{
    opacity: 0;
}
</style>