<template>
    <div class="container">
        <OpSearch v-model:modelVal="searchVal" shape="round" showAction @search="searchClick">
            <!-- <template #action>
                <div @click="emits('cancel')">取消</div>
            </template> -->
        </OpSearch>
    </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import { OpSearch } from '@/components/index'
import { getSearchData } from '@/api/search'
interface IEmits{
    (e:'cancel'):void
}
const emits = defineEmits<IEmits>()
const searchVal = ref('')
const searchClick = async (v?:number | string)=> {
    console.log(v)
    const { list } = await getSearchData({searchKey:v as string})

}
</script>

<style lang='less' scoped>
.container{
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom: 0;
    z-index: 999;
    background-color: #f6f6f6;
}
</style>