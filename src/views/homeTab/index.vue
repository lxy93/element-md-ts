<template>
    <RouterView></RouterView>
    <van-tabbar v-model="active">
        <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item name="order" icon="search">订单</van-tabbar-item>
        <van-tabbar-item name="self" icon="friends-o">我</van-tabbar-item>
    </van-tabbar>
</template>

<script lang='ts' setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const active = ref(route.name as string)
watch(active,(value)=>{
    router.push({
        name:value
    })
})


</script>

<style lang='' scoped>

</style>