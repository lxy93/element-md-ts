<template>
    <div class="op-loading">
        <slot name="template">
            <div v-if="type === 'loading'" class="flex-column content-center items-center">
                <van-loading />
            </div>
            <div v-if="type === 'skeleton'" class="pl10 pr10 pt20 pb20">
                <van-skeleton :row="10" />
                <van-skeleton title avatar :row="5" />
                <van-skeleton title :row="5" />
            </div>
        </slot>
    </div>
    <slot name="template"></slot>
</template>

<script lang='ts' setup>
import {  } from 'vue'
interface IProps {
    loading: boolean,
    type: 'loading' | 'skeleton'
}
defineProps<IProps>()

</script>

<style lang='less' scoped>
.op-loading{

}
</style>