<template>
    <div>
        <Transition name="fade">
            <SearchView v-if="isSearchViewShow" @cancel="toggleSearchView" />
        </Transition>
        <Top :recomments="recomments" @searchClick="toggleSearchView"/>
    </div>
</template>

<script lang='ts' setup>
import { Top, SearchView } from './components/home/index'
import {  } from 'vue'
import { useToggle } from '@/hooks/useToggle'
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

</script>

<style lang='less' scoped>
.fade-enter-active,.fade-leave-active{
    transition: opacity .5s ease;
}
.fade-enter-from,.fade-leave-to{
    opacity: 0;
}
</style>