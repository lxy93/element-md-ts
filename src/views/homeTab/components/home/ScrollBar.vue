<template>
    <div class="home-scroll-bar">
        <div class="home-scroll-bar-swiper">
            <div ref="containerRef">
                <!-- <div class="swiper-item" v-for="v in props.data" :key="v.type">
                    {{ v.type }}
                </div> -->
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useInterval } from '@/hooks/useInterval'
import { useTimeout } from '@/hooks/useTimeout'
import type { IScrollBarInfo } from '../../types'
interface IProps {
    intervalTime?: number
    transitionTime?: number
    height?: number
    data: IScrollBarInfo[]
}
const props = withDefaults(defineProps<IProps>(),{
    intervalTime: 3000,
    transitionTime: 1000,
    height: 40
})

const containerRef = ref()
onMounted(()=> {
    const container = containerRef.value
    const count = container.length
    const firstSwiperItem = container.children[0]
    container.style.height = `${count * props.height}px`
    let index = 0
    useInterval(()=> {
        index++
        if(index === count){
            firstSwiperItem.style.transform = `translateY(${index * props.height}px)`
            const clearTimeOut = useTimeout(()=> {
                firstSwiperItem.style.transform = ''
                container.style.transform = ''
                container.style.transition = ''
                clearTimeOut()
            },props.transitionTime)
        }
        container.style.transform = `translateY(${ -index * props.height }px)`
        container.style.transition = `all linear ${ props.transitionTime }ms`
        index = index % count
    },props.intervalTime)
})
</script>

<style lang='less' scoped>
.home-scroll-bar {
  --bean-color: rgb(252, 164, 40);
  --hongbao-color: rgb(252, 68, 25);
  &__swipe {
    background: white;
    border-radius: 8px;
    margin: 5px 10px;
    font-size: 13px;
    position: relative;
    overflow: hidden;
    height: v-bind(heightPx);
    .swipe-item {
      height: v-bind(heightPx);
    }
  }
  .scroll-bar__info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    height: 100%;

    .info-badge {
      border-radius: 5px;
      padding: 2px 6px;
      color: white;
      margin-right: 6px;
      font-size: 12px;
    }
    .info-detail {
      flex: 1;
    }
    .info-btn {
      padding: 3px 14px;
      font-size: 12px;
      &.op-thin-border:before {
        border-radius: 50px;
      }
    }

    .info-num {
      font-weight: bold;
      margin: 0 2px;
    }

    &__bean {
      .info-badge {
        background: var(--bean-color);
      }
      .info-btn {
        color: var(--bean-color);
        &:before {
          border-color: var(--bean-color);
        }
      }
      .info-num {
        color: var(--bean-color);
      }
    }

    &__hongbao {
      .info-badge {
        background: var(--hongbao-color);
      }
      .info-btn {
        color: var(--hongbao-color);
        &:before {
          border-color: var(--hongbao-color);
        }
      }
      .info-num {
        color: var(--hongbao-color);
      }
    }
  }
}
</style>