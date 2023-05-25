<template>
    <div>
        <Transition name="fade">
            <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView" />
        </Transition>
        <Top :recomments="recomments" @searchClick="toggleSearchView"/>
        {{ data }}
        {{ pedding }}
    </div>
</template>

<script lang='ts' setup>
import { Top, SearchView } from './components/home/index'
import { useToggle } from '@/hooks/useToggle'
import { useAsync } from '@/hooks/useAsync'
import { getHomeData } from '@/api/home'
import { onMounted } from 'vue'
import type { IHomeInfo } from './types'
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

const { data, pedding } = useAsync(getHomeData,{} as IHomeInfo)
// const getHomeDataFun = async()=> {
//     await getHomeData()
// }
// onMounted(()=> {
//     getHomeDataFun()
// })
</script>

<style lang='less' scoped>
.fade-enter-active,.fade-leave-active{
    transition: opacity .5s ease;
}
.fade-enter-from,.fade-leave-to{
    opacity: 0;
}
</style>