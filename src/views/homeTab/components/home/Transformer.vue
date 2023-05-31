<template>
    <ul class="home-transformer">
        <li v-for="(v, i) in props.data" :key="i" class="home-transformer__item">
            <img :src="v.imgUrl" />
            <p>{{ v.label }}</p>
        </li>
    </ul>
</template>

<script lang='ts' setup>
import type { ITransformer } from '../../types'
interface IProps {
    data: ITransformer[]
}
let props = withDefaults(defineProps<IProps>(),{
    data: ()=> []
})

</script>

<style lang='less' scoped>
.home-transformer{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding: 20px;
    &__item {
        font-size: 28px;
        line-height: 30px;
        text-align: center;
        img {
            width: 96px;
        }
    }
}
</style>