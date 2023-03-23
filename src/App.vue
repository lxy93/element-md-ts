<script setup lang="ts">
import { Toast } from "vant";
import { RouterLink, RouterView } from "vue-router";
const aa = ()=>{
  new Toast('提示内容')
}
aa()
</script>

<template>
  <div class="test">
    112121212
  </div>
  <van-button type="primary" size="small">主要按钮</van-button>
  <!-- <RouterView /> -->
</template>

<style scoped>
.test{
  font-size: 32px;
}
</style>
