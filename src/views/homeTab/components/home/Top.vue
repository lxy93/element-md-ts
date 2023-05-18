<template>
    <div class="top-bg">
        <div class="flex-row items-center pl20 pr20 pt20">
            <img src="@/assets/images/home/location.png" class="location block" />
            <div class="f32 location-text">幸福小区（北一区）</div>
            <img src="@/assets/images/home/shopcart.png" class="shopcart">
            <img src="@/assets/images/home/comments.png" class="comments">
        </div>
        <OpSearch 
            v-model:modelVal="searchVal" 
            shape="round" 
            background="linear-gradient(to right,rgba(53,200,250),rgba(31,175,243))" 
            placeholder="世界茶饮 35减2"
            @search="onSearch"
            @cancel="onCancel"
            @clear="onClear"
            @inputClick="emits('searchClick')"
        >
            <template #right-icon>
                <div>搜索</div>
            </template>
        </OpSearch>
        <div class="flex-row items-center pl20 pr20 pb20">
            <div v-for="tagItem in recomments" :key="tagItem.value" class="tag f24 br20">{{ tagItem.label }}</div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { OpSearch } from '@/components/index'
import type { ISearchRecomment } from '../../types/index'
// defineProps不支持使用外部导入的类型,会报错，所以用此方法
export interface Iprops{
    recomments:ISearchRecomment[]
}
defineProps<Iprops>()
const searchVal = ref<number | string>('')
const onSearch = (v?:number | string)=> {
    console.log('-----onSearch',v)
}
const onCancel = ()=> {
    console.log('----onCancel')
}
const onClear = ()=> {
    console.log('-----onClear')
}
interface IEmits{
    (e:'searchClick'):void
}
const emits = defineEmits<IEmits>()
</script>

<style lang='less' scoped>
.top-bg{
    background: linear-gradient(to right,rgba(53,200,250),rgba(31,175,243));
    color: #fff;
    .location{
        width: 48px;
        height: 48px;
        vertical-align: middle;
    }
    .location-text{
        display: flex;
        flex:1
    }
    .shopcart{
        width: 48px;
        height: 48px;
        margin-right: 20px;
    }
    .comments{
        width: 56px;
        height: 48px;
    }
    :deep(.van-field__right-icon){
        margin: 0;
    }
    .tag{
        background: rgba(242, 242, 242, .3);
        padding: 4px 16px;
        margin-left: 20px;
    }
}
</style>