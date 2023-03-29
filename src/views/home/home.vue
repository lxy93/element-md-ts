<template>
    <div>
        <Top :recomments="recomments" />
    </div>
</template>

<script lang='ts' setup>
import { Top } from './components/home/index'
import {  } from 'vue'

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
</script>

<style lang='less' scoped>

</style>